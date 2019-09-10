class StaticPagesController < ApplicationController
  # def self.get_stylesheets
  #   directories = __dir__.split("/")[0...-1]
  #   directories << "assets"
  #   directories << "stylesheets"
  #   directories << "bulk_import"
  #   Dir[directories.join("/")]
  # end

  def root
    @stylesheets = Dir["../assets/stylesheets/bulk_import/*"].map { |path| File.basename(path) }
    render :root
  end
end
