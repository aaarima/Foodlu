class User < ApplicationRecord
  attr_reader :password

  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :first_name, :last_name, presence: true
  validates :gender, inclusion: ["Male", "Female", nil], allow_nil: true;
  validate :is_number?

  after_initialize :ensure_session_token

  def is_number?
    true if Integer(self.age) rescue false;
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil if user.nil?

    if user.is_password?(password)
      return user
    else
      return false
    end
  end
end
