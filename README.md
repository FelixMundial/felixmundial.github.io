
# Setup guide for Github Pages (as of Oct.9.2017 on Windows 10 x64)
blog url: https://felixmundial.github.io/
***

## Page setup using *Jekyll* templates 

1. Installation of *Ruby* on Windows:

> https://rubyinstaller.org/ 

--> normal setup

2. Installation of Jekyll via *RubyGems*:

When in command prompt -->

`> gem install jekyll`

With possible output ending with:

`Done installing documentation for public_suffix, addressable, colorator, rb-fsevent, ffi, rb-inotify, sass-listen, sass, jekyll-sass-converter, listen, jekyll-watch, kramdown, liquid, mercenary, forwardable-extended, pathutil, rouge, safe_yaml, jekyll after 50 seconds`

`19 gems installed`

3. Installation of *Bundler*

`gem install bundle`

With possible output ending with:

`Done installing documentation for bundler, bundle after 18 seconds`

`2 gems installed`

4. Installation of Jekyll presets in the target folder containing the page files

`> bundle install`

With possible output ending with:

`Bundle complete! 1 Gemfile dependency, 22 gems now installed.`

`Use 'bundle info [gemname]' to see where a bundled gem is installed.`

1. Establishing Jekyll environment enabling a serving running at http://localhost:4000/

`> bundle exec jekyll serve`

With possible output ending with:

`Auto-regeneration: enabled for 'C:\Users\WINDOWS_USERNAME\Documents\GitHub\GITHUB_USER NAME.github.io'`

`Server address: http://127.0.0.1:4000`
  
`Server running... press ctrl-c to stop.`

1. Visit http://localhost:4000/ to see the template layout (!! With the command prompt window open)
2. Return to Github Desktop and when ready with your changes, "Commit to Master"" and "Push origin"

* Further page setup by making modifications on .md files
