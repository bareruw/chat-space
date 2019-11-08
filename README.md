# README

## users テーブル
|Column|Type|Options|
|------|----|-------|
|password|string|null: false|
|nickname|string|null: false|
|email|string|null: false, unique: true|

   # Association
- has_many :groups,  through:  :chats_users
- has_many :comments
- has_many :chats_users

##  groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

   # Association
- has_many :users,  through:  :chats_users
- has_many :comments
- has_many :chats_users

## comments テーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

   # Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

   # Association
- belongs_to :group
- belongs_to :user