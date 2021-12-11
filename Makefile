#!make

SHELL := /bin/sh
GITROOT := $(shell git rev-parse --show-toplevel)

include $(GITROOT)/.env
export

submodule/update:
	git submodule update --init --recursive

