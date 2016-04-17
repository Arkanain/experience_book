class AddUserRefToArticles < ActiveRecord::Migration
  def change
    add_index :articles, :user_id
    add_foreign_key :articles, :users
  end
end
