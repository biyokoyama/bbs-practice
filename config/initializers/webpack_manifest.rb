webpack_manifest_path = Rails.root.join('public', 'assets', 'manifest.json')
if File.exist?(webpack_manifest_path)
  Rails.application.config.webpack_manifest = JSON.parse(File.read(webpack_manifest_path))
end
