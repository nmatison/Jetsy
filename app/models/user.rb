class User < ApplicationRecord
validates :username, :session_token, uniqueness: true, presence: true
validates :password_digest, presence: true
validates :password, length: {minimum: 7, allow_nil: true}

attr_reader :password

after_initialize :ensure_session_token

def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def self.find_by_credentials(username, password)
  user = User.find_by(username: username)
  return user if user && user.is_password?(password)
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def ensure_session_token
  self.session_token ||= SecureRandom.urlsafe_base64
end

def reset_session_token!
  self.session_token = SecureRandom.urlsafe_base64
  self.save!
  self.session_token
end


end
