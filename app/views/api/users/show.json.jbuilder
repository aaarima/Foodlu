not_include = Set["created_at", "updated_at", "password_digest", "session_token"]
json.extract! @user, *@user.attributes.keys.reject { |key| not_include.include?(key)}