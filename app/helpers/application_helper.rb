module ApplicationHelper
  def action_button(name, icon_class)
    icon = content_tag(:i, '', class: "fa #{icon_class}")
    text = content_tag(:span, name, class: 'button_text')
    icon + text
  end
end
