  let
    pkgs = import <nixpkgs> {};
  in
  # append "NoCC" if no C comiler is required
    pkgs.mkShell {
      packages = with pkgs; [
        ruby
	gem
      ];
      shellHook = ''
        gem install jekyll bundler && bundle install && bundle exec jekyll serve --watch
      '';
  }
