module ApplicationHelper

  #
  # vue entrypoint js tag
  #
  def entryjs_tag(entry_name)
    #
    # development (webpack-dev-server)
    #
    if Rails.env.development?
      file_name = "#{entry_name}.bundle.js"
      return javascript_include_tag "http://localhost:8080/#{file_name}"
    end

    #
    # staging, production
    #
    manifest = Rails.application.config.webpack_manifest
    file_name = manifest["#{entry_name}.js"]
    return javascript_include_tag "/assets/#{file_name}"
  end

end
