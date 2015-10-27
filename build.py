# -*- coding: utf-8 -*-

from os import path, getcwd, makedirs
from sys import argv
from shutil import rmtree
from staticjinja import make_site

_AUTO_RELOAD = True

# Define constants for the deployment.
_SEARCHPATH = path.join(getcwd(), 'templates')
_OUTPUTPATH = path.join(getcwd(), 'site')


def filters():
    return {}


def context():
    return {}


def cleanup():
    # Clean the output folder.
    if path.exists(_OUTPUTPATH):
        rmtree(_OUTPUTPATH)

    # Remake the output folder.
    makedirs(_OUTPUTPATH)


if __name__ == '__main__':
    auto = _AUTO_RELOAD
    ctxt = context()
    site = {}

    cleanup()

    # Accept CLI parameter to turn the auto reloader on and off.
    if len(argv) == 2:
        arg = argv[1].lower()

        if arg in ['0', 'false', 'off', 'no']:
            auto = False

        elif arg in ['1', 'true', 'on', 'yes']:
            auto = True

    site['filters'] = filters()
    site['outpath'] = _OUTPUTPATH
    site['contexts'] = [(r'.*.html', lambda: ctxt)]
    site['searchpath'] = _SEARCHPATH
    site['staticpaths'] = ['static']

    make_site(**site).render(use_reloader=auto)
