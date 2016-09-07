<?php

declare(strict_types=1);

const intp = '\p\intp';
const floatp = '\p\floatp';

require_once 'str/lowerp.php';
require_once 'str/upperp.php';
require_once 'str/charp.php';
require_once 'num/evenp.php';
require_once 'num/oddp.php';


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
    'andp',
    'orp',
    'equalp',
    'samep',
    'nullp',
    'intp',
    'floatp',
    'boolp',
    'arrayp',
    'objectp',
    'resourcep',
    'stringp',
    'scalarp',
    'numericp',
    'emptyp',
    'callablep'
));
