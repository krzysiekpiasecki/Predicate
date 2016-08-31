
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Predicate</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Predicate_Framework" >                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Predicate/Framework.html">Framework</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Predicate_Framework_AndP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/AndP.html">AndP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_ComplexP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/ComplexP.html">ComplexP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_DualP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/DualP.html">DualP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_EqualP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/EqualP.html">EqualP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_FalseP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/FalseP.html">FalseP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_FloatP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/FloatP.html">FloatP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_IfElseP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/IfElseP.html">IfElseP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_IfP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/IfP.html">IfP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_IntP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/IntP.html">IntP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_InvokeP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/InvokeP.html">InvokeP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_IsFloatP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/IsFloatP.html">IsFloatP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_IsIntP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/IsIntP.html">IsIntP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_IsStringP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/IsStringP.html">IsStringP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_NotEmptyP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/NotEmptyP.html">NotEmptyP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_NotNullP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/NotNullP.html">NotNullP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_NotP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/NotP.html">NotP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_OrP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/OrP.html">OrP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_Predicate" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/Predicate.html">Predicate</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_SingleP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/SingleP.html">SingleP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_StrictEqualP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/StrictEqualP.html">StrictEqualP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_StringP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/StringP.html">StringP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_TrueP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/TrueP.html">TrueP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_XorP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/XorP.html">XorP</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Predicate.html", "name": "Predicate", "doc": "Namespace Predicate"},{"type": "Namespace", "link": "Predicate/Framework.html", "name": "Predicate\\Framework", "doc": "Namespace Predicate\\Framework"},
            {"type": "Interface", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/Predicate.html", "name": "Predicate\\Framework\\Predicate", "doc": "&quot;A functional predicate that may be true or false&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\Predicate", "fromLink": "Predicate/Framework/Predicate.html", "link": "Predicate/Framework/Predicate.html#method___invoke", "name": "Predicate\\Framework\\Predicate::__invoke", "doc": "&quot;Invokes a predicate on the subjects and returns the result that may be true or false\ndepending on the predicate subjects&quot;"},
            
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/AndP.html", "name": "Predicate\\Framework\\AndP", "doc": "&quot;Composed predicate that represents a short-circuiting logical AND of this predicate and another&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\AndP", "fromLink": "Predicate/Framework/AndP.html", "link": "Predicate/Framework/AndP.html#method___construct", "name": "Predicate\\Framework\\AndP::__construct", "doc": "&quot;Composed predicate that represents  a short-circuiting logical AND of this predicate and another.&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\AndP", "fromLink": "Predicate/Framework/AndP.html", "link": "Predicate/Framework/AndP.html#method___invoke", "name": "Predicate\\Framework\\AndP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/ComplexP.html", "name": "Predicate\\Framework\\ComplexP", "doc": "&quot;Composed predicate that represents a complex predicate statement&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\ComplexP", "fromLink": "Predicate/Framework/ComplexP.html", "link": "Predicate/Framework/ComplexP.html#method___construct", "name": "Predicate\\Framework\\ComplexP::__construct", "doc": "&quot;Composed predicate that represents a complex predicate statement&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\ComplexP", "fromLink": "Predicate/Framework/ComplexP.html", "link": "Predicate/Framework/ComplexP.html#method_andP", "name": "Predicate\\Framework\\ComplexP::andP", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\ComplexP", "fromLink": "Predicate/Framework/ComplexP.html", "link": "Predicate/Framework/ComplexP.html#method_orP", "name": "Predicate\\Framework\\ComplexP::orP", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\ComplexP", "fromLink": "Predicate/Framework/ComplexP.html", "link": "Predicate/Framework/ComplexP.html#method_negate", "name": "Predicate\\Framework\\ComplexP::negate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\ComplexP", "fromLink": "Predicate/Framework/ComplexP.html", "link": "Predicate/Framework/ComplexP.html#method___invoke", "name": "Predicate\\Framework\\ComplexP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/DualP.html", "name": "Predicate\\Framework\\DualP", "doc": "&quot;Framework that represents the predicate on two arguments&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\DualP", "fromLink": "Predicate/Framework/DualP.html", "link": "Predicate/Framework/DualP.html#method___construct", "name": "Predicate\\Framework\\DualP::__construct", "doc": "&quot;Framework that represents the predicate on two arguments&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\DualP", "fromLink": "Predicate/Framework/DualP.html", "link": "Predicate/Framework/DualP.html#method___invoke", "name": "Predicate\\Framework\\DualP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/EqualP.html", "name": "Predicate\\Framework\\EqualP", "doc": "&quot;Framework that all arguments are equal&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\EqualP", "fromLink": "Predicate/Framework/EqualP.html", "link": "Predicate/Framework/EqualP.html#method___invoke", "name": "Predicate\\Framework\\EqualP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/FalseP.html", "name": "Predicate\\Framework\\FalseP", "doc": "&quot;Opaque predicate that is always false&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\FalseP", "fromLink": "Predicate/Framework/FalseP.html", "link": "Predicate/Framework/FalseP.html#method___construct", "name": "Predicate\\Framework\\FalseP::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\FalseP", "fromLink": "Predicate/Framework/FalseP.html", "link": "Predicate/Framework/FalseP.html#method___invoke", "name": "Predicate\\Framework\\FalseP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/FloatP.html", "name": "Predicate\\Framework\\FloatP", "doc": "&quot;Framework that represents the predicate only on float arguments&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\FloatP", "fromLink": "Predicate/Framework/FloatP.html", "link": "Predicate/Framework/FloatP.html#method___construct", "name": "Predicate\\Framework\\FloatP::__construct", "doc": "&quot;Framework that represents the predicate only on float arguments&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\FloatP", "fromLink": "Predicate/Framework/FloatP.html", "link": "Predicate/Framework/FloatP.html#method___invoke", "name": "Predicate\\Framework\\FloatP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/IfElseP.html", "name": "Predicate\\Framework\\IfElseP", "doc": "&quot;Composed predicate that represents if\/else predicate&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\IfElseP", "fromLink": "Predicate/Framework/IfElseP.html", "link": "Predicate/Framework/IfElseP.html#method___construct", "name": "Predicate\\Framework\\IfElseP::__construct", "doc": "&quot;Composed predicate that represents if\/else predicate&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\IfElseP", "fromLink": "Predicate/Framework/IfElseP.html", "link": "Predicate/Framework/IfElseP.html#method___invoke", "name": "Predicate\\Framework\\IfElseP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/IfP.html", "name": "Predicate\\Framework\\IfP", "doc": "&quot;Composed predicate that represents if predicate&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\IfP", "fromLink": "Predicate/Framework/IfP.html", "link": "Predicate/Framework/IfP.html#method___construct", "name": "Predicate\\Framework\\IfP::__construct", "doc": "&quot;Composed predicate that represents if predicate&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\IfP", "fromLink": "Predicate/Framework/IfP.html", "link": "Predicate/Framework/IfP.html#method___invoke", "name": "Predicate\\Framework\\IfP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/IntP.html", "name": "Predicate\\Framework\\IntP", "doc": "&quot;Framework that represents the predicate only on int arguments&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\IntP", "fromLink": "Predicate/Framework/IntP.html", "link": "Predicate/Framework/IntP.html#method___construct", "name": "Predicate\\Framework\\IntP::__construct", "doc": "&quot;Framework that represents the predicate only on int arguments&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\IntP", "fromLink": "Predicate/Framework/IntP.html", "link": "Predicate/Framework/IntP.html#method___invoke", "name": "Predicate\\Framework\\IntP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/InvokeP.html", "name": "Predicate\\Framework\\InvokeP", "doc": "&quot;Framework that represents the result of external callable predicate&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\InvokeP", "fromLink": "Predicate/Framework/InvokeP.html", "link": "Predicate/Framework/InvokeP.html#method___construct", "name": "Predicate\\Framework\\InvokeP::__construct", "doc": "&quot;Framework that represents the result of external callable predicate&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\InvokeP", "fromLink": "Predicate/Framework/InvokeP.html", "link": "Predicate/Framework/InvokeP.html#method___invoke", "name": "Predicate\\Framework\\InvokeP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/IsFloatP.html", "name": "Predicate\\Framework\\IsFloatP", "doc": "&quot;Framework that all input arguments are float values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\IsFloatP", "fromLink": "Predicate/Framework/IsFloatP.html", "link": "Predicate/Framework/IsFloatP.html#method___invoke", "name": "Predicate\\Framework\\IsFloatP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/IsIntP.html", "name": "Predicate\\Framework\\IsIntP", "doc": "&quot;Framework that all input arguments are int values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\IsIntP", "fromLink": "Predicate/Framework/IsIntP.html", "link": "Predicate/Framework/IsIntP.html#method___invoke", "name": "Predicate\\Framework\\IsIntP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/IsStringP.html", "name": "Predicate\\Framework\\IsStringP", "doc": "&quot;Framework that all input arguments are string values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\IsStringP", "fromLink": "Predicate/Framework/IsStringP.html", "link": "Predicate/Framework/IsStringP.html#method___invoke", "name": "Predicate\\Framework\\IsStringP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/NotEmptyP.html", "name": "Predicate\\Framework\\NotEmptyP", "doc": "&quot;Framework that all input arguments are not empty&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\NotEmptyP", "fromLink": "Predicate/Framework/NotEmptyP.html", "link": "Predicate/Framework/NotEmptyP.html#method___invoke", "name": "Predicate\\Framework\\NotEmptyP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/NotNullP.html", "name": "Predicate\\Framework\\NotNullP", "doc": "&quot;Framework that all input arguments are not null&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\NotNullP", "fromLink": "Predicate/Framework/NotNullP.html", "link": "Predicate/Framework/NotNullP.html#method___invoke", "name": "Predicate\\Framework\\NotNullP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/NotP.html", "name": "Predicate\\Framework\\NotP", "doc": "&quot;Framework, that is logical negation of the other predicate&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\NotP", "fromLink": "Predicate/Framework/NotP.html", "link": "Predicate/Framework/NotP.html#method___construct", "name": "Predicate\\Framework\\NotP::__construct", "doc": "&quot;Framework, that is logical negation of the other predicate&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\NotP", "fromLink": "Predicate/Framework/NotP.html", "link": "Predicate/Framework/NotP.html#method___invoke", "name": "Predicate\\Framework\\NotP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/OrP.html", "name": "Predicate\\Framework\\OrP", "doc": "&quot;Composed predicate that represents the short-circuiting logical OR of this predicate and another&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\OrP", "fromLink": "Predicate/Framework/OrP.html", "link": "Predicate/Framework/OrP.html#method___construct", "name": "Predicate\\Framework\\OrP::__construct", "doc": "&quot;Composed predicate that represents the short-circuiting logical OR of this predicate and the\nother predicates&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\OrP", "fromLink": "Predicate/Framework/OrP.html", "link": "Predicate/Framework/OrP.html#method___invoke", "name": "Predicate\\Framework\\OrP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/Predicate.html", "name": "Predicate\\Framework\\Predicate", "doc": "&quot;A functional predicate that may be true or false&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\Predicate", "fromLink": "Predicate/Framework/Predicate.html", "link": "Predicate/Framework/Predicate.html#method___invoke", "name": "Predicate\\Framework\\Predicate::__invoke", "doc": "&quot;Invokes a predicate on the subjects and returns the result that may be true or false\ndepending on the predicate subjects&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/SingleP.html", "name": "Predicate\\Framework\\SingleP", "doc": "&quot;Framework that represents the predicate on single argument&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\SingleP", "fromLink": "Predicate/Framework/SingleP.html", "link": "Predicate/Framework/SingleP.html#method___construct", "name": "Predicate\\Framework\\SingleP::__construct", "doc": "&quot;Framework that represents the predicate on single argument&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\SingleP", "fromLink": "Predicate/Framework/SingleP.html", "link": "Predicate/Framework/SingleP.html#method___invoke", "name": "Predicate\\Framework\\SingleP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/StrictEqualP.html", "name": "Predicate\\Framework\\StrictEqualP", "doc": "&quot;Framework that all arguments are strictly equal&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\StrictEqualP", "fromLink": "Predicate/Framework/StrictEqualP.html", "link": "Predicate/Framework/StrictEqualP.html#method___invoke", "name": "Predicate\\Framework\\StrictEqualP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/StringP.html", "name": "Predicate\\Framework\\StringP", "doc": "&quot;Framework that represents the predicate only on string arguments&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\StringP", "fromLink": "Predicate/Framework/StringP.html", "link": "Predicate/Framework/StringP.html#method___construct", "name": "Predicate\\Framework\\StringP::__construct", "doc": "&quot;Framework that represents the predicate only on string arguments&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\StringP", "fromLink": "Predicate/Framework/StringP.html", "link": "Predicate/Framework/StringP.html#method___invoke", "name": "Predicate\\Framework\\StringP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/TrueP.html", "name": "Predicate\\Framework\\TrueP", "doc": "&quot;Opaque predicate that is always true&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\TrueP", "fromLink": "Predicate/Framework/TrueP.html", "link": "Predicate/Framework/TrueP.html#method___construct", "name": "Predicate\\Framework\\TrueP::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\TrueP", "fromLink": "Predicate/Framework/TrueP.html", "link": "Predicate/Framework/TrueP.html#method___invoke", "name": "Predicate\\Framework\\TrueP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/XorP.html", "name": "Predicate\\Framework\\XorP", "doc": "&quot;Composed predicate that represents a short-circuiting logical XOR of this predicate and another&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\XorP", "fromLink": "Predicate/Framework/XorP.html", "link": "Predicate/Framework/XorP.html#method___construct", "name": "Predicate\\Framework\\XorP::__construct", "doc": "&quot;XorP&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\XorP", "fromLink": "Predicate/Framework/XorP.html", "link": "Predicate/Framework/XorP.html#method___invoke", "name": "Predicate\\Framework\\XorP::__invoke", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


