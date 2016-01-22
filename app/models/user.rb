class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable, :registerable, :recoverable and :omniauthable
  devise :database_authenticatable, :rememberable, :validatable

  attr_accessible :first_name, :last_name, :email, :password, :password_confirmation

  has_many :articles

  before_save :assign_name

  def assign_name
    self.first_name = self.email.slice(/^([\w\.]*)/) if self.first_name.blank?
    self.last_name = self.email.slice(/^([\w\.]*)/) if self.last_name.blank?
  end
end