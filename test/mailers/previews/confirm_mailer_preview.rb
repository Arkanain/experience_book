class ConfirmMailerPreview < ActionMailer::Preview
  def confirmation_instructions
    ConfirmMailer.confirmation_instructions(User.first, "faketoken", {})
  end
end