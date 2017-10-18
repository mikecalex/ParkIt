class User < ApplicationRecord
  validates_presence_of :first_name
  validates_presence_of :last_name
  validates :email, presence: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable

  def admin?
    role == "admin"
  end
end
