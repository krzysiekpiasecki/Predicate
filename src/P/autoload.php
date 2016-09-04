<?php

declare(strict_types=1);

namespace P;

array_map(function (string $p) {
    require_once(
        sprintf(
            '%s/%s.php',
            __DIR__,
            $p
        )
    );
}, array(
    'notp',
    'nullp',
    'intp',
    'floatp',
    'boolp',
    'arrayp'

));
