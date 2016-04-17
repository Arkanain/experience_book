class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable, :trackable, :recoverable and :omniauthable, :confirmable
  devise :database_authenticatable, :rememberable, :validatable, :registerable

  attr_accessible :email, :password, :password_confirmation

  has_many :articles, dependent: :destroy

  enum role: { writer: 0, admin: 1 }
end