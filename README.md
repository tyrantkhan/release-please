# automation

This branch exists so the `Sync with upstream` workflow can run on a schedule.
It is the fork's default branch for that reason only. `main` mirrors
googleapis/release-please, and `feat/pull-request-group` carries
googleapis/release-please#2904.

Tags below 17.11.2 mirror upstream. From 17.11.2 on, this fork's `vX.Y.Z` is
upstream `vX.Y.Z` plus the pull request's patch: the tag carries the compiled
package (`npm install github:tyrantkhan/release-please#vX.Y.Z` is a drop-in for
`release-please@X.Y.Z`) and its release carries the CLI bundled by ncc.
Switching between upstream and this fork changes only the source.
