<?php

declare(strict_types  = 1);

return new Sami\Sami(
    './src',
    array(
        'build_dir' => './docs/api',
        'cache_dir' => './var/cache/sami',
        'title' => 'Predicate',
        'theme' => 'default',
        'include_parent_data' => true,
        'default_opened_level' => 1
    )
);