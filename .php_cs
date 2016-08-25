 <?php

    $finder = Symfony\CS\Finder\DefaultFinder::create()
        ->exclude([
            'docs',
            'var',
            'vendor'
        ])
        ->in(sprintf('%s/src', __DIR__))
        ->in(sprintf('%s/tests', __DIR__));

    return Symfony\CS\Config\Config::create()
        ->level(Symfony\CS\FixerInterface::PSR2_LEVEL)
        ->finder($finder);