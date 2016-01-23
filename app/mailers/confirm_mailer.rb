class ConfirmMailer < Devise::Mailer
  default template_path: 'devise/mailer'

  def confirmation_instructions(record, token, opts={})
    opts[:subject] = 'Experience Book confirmation instructions'
    super
  end
end