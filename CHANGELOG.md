# Changelog

## Unreleased

### Fixed

- Remove the post-publish npm visibility gate while retaining exact source checks and fail-closed pre-publish reconciliation.

## [0.1.3] - 2026-09-29

### Changed

- Pin TypeScript 7.0.2.
- Align development and deterministic validation with Pi 0.99.1.
- Document latest-stable-only Pi support; the carrier remains a no-op.

## [0.1.2] - 2026-09-21

### Changed

- Update Pi development dependencies and validation baseline to 0.87.0.


## [0.1.1] - 2026-09-20

### Changed

- Validate the extension carrier against Pi 0.86.1.

## [0.1.0] - 2026-08-06

### Added

- A loadable no-op Pi extension carrier that intentionally registers no resources.
