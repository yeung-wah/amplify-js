# amplify-diagnose

`amplify-diagnose` is a tool that will tell if there's a duplicate amplify dependencies and how to resolve it.

## Installation

in this folder where README and package.json is, run

```bash
$ yarn && npm install -g
```

This will install `amplify-diagnose` to the global npm packages.

## Basic Usage

In the root directory of your application, run

```bash
$ amplify-diagnose
```

### Show matching versions

The simplest way to resolve duplicated versions is to upgrade the amplify to latest (see [documentation](https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)). But if you wish to use previous versions, you can run

```bash
# Global amplify module
$ amplify-diagnose --matching-versions aws-amplify@3.3.20

# Scoped amplify module
$ amplify-diagnose --matching-versions @aws-amplify/auth@3.3.2

# Using `latest` tag
$ amplify-diagnose --matching-versions aws-amplify@latest
```
