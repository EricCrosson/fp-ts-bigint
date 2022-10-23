{
  description = "fp-ts-bigint";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    flake-compat,
  }: (
    flake-utils.lib.eachDefaultSystem (
      system: (
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in {
          devShell = pkgs.mkShell {
            name = "fp-ts-bigint shell";

            packages = with pkgs; [
              nodejs
            ];

            shellHook = ''
              export PATH="$(pwd)/node_modules/.bin:$PATH"
            '';
          };
        }
      )
    )
  );
}
