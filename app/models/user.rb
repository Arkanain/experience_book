class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable, :recoverable and :omniauthable
  devise :database_authenticatable, :rememberable, :validatable, :registerable

  attr_accessible :email, :password, :password_confirmation

  has_many :articles
end