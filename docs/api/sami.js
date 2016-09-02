
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Predicate</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Predicate_Common" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Predicate/Common.html">Common</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Predicate_Common_IsAlnumP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsAlnumP.html">IsAlnumP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsAlphaP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsAlphaP.html">IsAlphaP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsArrayP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsArrayP.html">IsArrayP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsBoolP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsBoolP.html">IsBoolP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsCallableP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsCallableP.html">IsCallableP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsCntrlP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsCntrlP.html">IsCntrlP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsDigitP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsDigitP.html">IsDigitP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsEmptyP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsEmptyP.html">IsEmptyP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsEqualP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsEqualP.html">IsEqualP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsEqualToP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsEqualToP.html">IsEqualToP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsFloatP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsFloatP.html">IsFloatP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsGraphP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsGraphP.html">IsGraphP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsIntP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsIntP.html">IsIntP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsLowerP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsLowerP.html">IsLowerP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsNotEmptyP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsNotEmptyP.html">IsNotEmptyP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsNotNullP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsNotNullP.html">IsNotNullP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsNullP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsNullP.html">IsNullP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsNumericP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsNumericP.html">IsNumericP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsObjectP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsObjectP.html">IsObjectP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsPrintP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsPrintP.html">IsPrintP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsPunctP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsPunctP.html">IsPunctP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsResourceP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsResourceP.html">IsResourceP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsSameAsP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsSameAsP.html">IsSameAsP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsSameP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsSameP.html">IsSameP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsScalarP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsScalarP.html">IsScalarP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsSpaceP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsSpaceP.html">IsSpaceP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsStringP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsStringP.html">IsStringP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsUpperP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsUpperP.html">IsUpperP</a>                    </div>                </li>                            <li data-name="class:Predicate_Common_IsXdigit" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Common/IsXdigit.html">IsXdigit</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Predicate_Framework" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Predicate/Framework.html">Framework</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Predicate_Framework_AndP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/AndP.html">AndP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_CallableP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/CallableP.html">CallableP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_ComplexP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/ComplexP.html">ComplexP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_DualP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/DualP.html">DualP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_FalseP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/FalseP.html">FalseP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_FloatP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/FloatP.html">FloatP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_IfElseP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/IfElseP.html">IfElseP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_IfP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/IfP.html">IfP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_IntP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/IntP.html">IntP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_NotP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/NotP.html">NotP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_OrP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/OrP.html">OrP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_Predicate" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/Predicate.html">Predicate</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_SingleP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/SingleP.html">SingleP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_StringP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/StringP.html">StringP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_TrueP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/TrueP.html">TrueP</a>                    </div>                </li>                            <li data-name="class:Predicate_Framework_XorP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Predicate/Framework/XorP.html">XorP</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Predicate.html", "name": "Predicate", "doc": "Namespace Predicate"},{"type": "Namespace", "link": "Predicate/Common.html", "name": "Predicate\\Common", "doc": "Namespace Predicate\\Common"},{"type": "Namespace", "link": "Predicate/Framework.html", "name": "Predicate\\Framework", "doc": "Namespace Predicate\\Framework"},
            {"type": "Interface", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/Predicate.html", "name": "Predicate\\Framework\\Predicate", "doc": "&quot;A functional predicate that may be true or false&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\Predicate", "fromLink": "Predicate/Framework/Predicate.html", "link": "Predicate/Framework/Predicate.html#method___invoke", "name": "Predicate\\Framework\\Predicate::__invoke", "doc": "&quot;Invokes a predicate on the subjects and returns the result that may be true or false\ndepending on the predicate subjects&quot;"},
            
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsAlnumP.html", "name": "Predicate\\Common\\IsAlnumP", "doc": "&quot;Predicate that all input arguments are alphanumeric strings&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsAlnumP", "fromLink": "Predicate/Common/IsAlnumP.html", "link": "Predicate/Common/IsAlnumP.html#method___invoke", "name": "Predicate\\Common\\IsAlnumP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsAlphaP.html", "name": "Predicate\\Common\\IsAlphaP", "doc": "&quot;Predicate that all input arguments are alphabetics strings&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsAlphaP", "fromLink": "Predicate/Common/IsAlphaP.html", "link": "Predicate/Common/IsAlphaP.html#method___invoke", "name": "Predicate\\Common\\IsAlphaP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsArrayP.html", "name": "Predicate\\Common\\IsArrayP", "doc": "&quot;Predicate that all input arguments are array values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsArrayP", "fromLink": "Predicate/Common/IsArrayP.html", "link": "Predicate/Common/IsArrayP.html#method___invoke", "name": "Predicate\\Common\\IsArrayP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsBoolP.html", "name": "Predicate\\Common\\IsBoolP", "doc": "&quot;Predicate that all input arguments are boolean values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsBoolP", "fromLink": "Predicate/Common/IsBoolP.html", "link": "Predicate/Common/IsBoolP.html#method___invoke", "name": "Predicate\\Common\\IsBoolP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsCallableP.html", "name": "Predicate\\Common\\IsCallableP", "doc": "&quot;Predicate that all input arguments are callable values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsCallableP", "fromLink": "Predicate/Common/IsCallableP.html", "link": "Predicate/Common/IsCallableP.html#method___invoke", "name": "Predicate\\Common\\IsCallableP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsCntrlP.html", "name": "Predicate\\Common\\IsCntrlP", "doc": "&quot;Predicate that all input arguments contains only control characters&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsCntrlP", "fromLink": "Predicate/Common/IsCntrlP.html", "link": "Predicate/Common/IsCntrlP.html#method___invoke", "name": "Predicate\\Common\\IsCntrlP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsDigitP.html", "name": "Predicate\\Common\\IsDigitP", "doc": "&quot;Predicate that all input arguments contains only digit characters&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsDigitP", "fromLink": "Predicate/Common/IsDigitP.html", "link": "Predicate/Common/IsDigitP.html#method___invoke", "name": "Predicate\\Common\\IsDigitP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsEmptyP.html", "name": "Predicate\\Common\\IsEmptyP", "doc": "&quot;Predicate that all input arguments are empty&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsEmptyP", "fromLink": "Predicate/Common/IsEmptyP.html", "link": "Predicate/Common/IsEmptyP.html#method___invoke", "name": "Predicate\\Common\\IsEmptyP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsEqualP.html", "name": "Predicate\\Common\\IsEqualP", "doc": "&quot;Predicate that all input arguments are equal&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsEqualP", "fromLink": "Predicate/Common/IsEqualP.html", "link": "Predicate/Common/IsEqualP.html#method___invoke", "name": "Predicate\\Common\\IsEqualP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsEqualToP.html", "name": "Predicate\\Common\\IsEqualToP", "doc": "&quot;Predicate that all input arguments are equal to a given argument&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsEqualToP", "fromLink": "Predicate/Common/IsEqualToP.html", "link": "Predicate/Common/IsEqualToP.html#method___construct", "name": "Predicate\\Common\\IsEqualToP::__construct", "doc": "&quot;New instance of this predicate&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Common\\IsEqualToP", "fromLink": "Predicate/Common/IsEqualToP.html", "link": "Predicate/Common/IsEqualToP.html#method___invoke", "name": "Predicate\\Common\\IsEqualToP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsFloatP.html", "name": "Predicate\\Common\\IsFloatP", "doc": "&quot;Predicate that all input arguments are float values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsFloatP", "fromLink": "Predicate/Common/IsFloatP.html", "link": "Predicate/Common/IsFloatP.html#method___invoke", "name": "Predicate\\Common\\IsFloatP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsGraphP.html", "name": "Predicate\\Common\\IsGraphP", "doc": "&quot;Predicate that all input arguments contains any printable characters except space&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsGraphP", "fromLink": "Predicate/Common/IsGraphP.html", "link": "Predicate/Common/IsGraphP.html#method___invoke", "name": "Predicate\\Common\\IsGraphP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsIntP.html", "name": "Predicate\\Common\\IsIntP", "doc": "&quot;Predicate that all input arguments are int values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsIntP", "fromLink": "Predicate/Common/IsIntP.html", "link": "Predicate/Common/IsIntP.html#method___invoke", "name": "Predicate\\Common\\IsIntP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsLowerP.html", "name": "Predicate\\Common\\IsLowerP", "doc": "&quot;Predicate that all input arguments are lowercase strings&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsLowerP", "fromLink": "Predicate/Common/IsLowerP.html", "link": "Predicate/Common/IsLowerP.html#method___invoke", "name": "Predicate\\Common\\IsLowerP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsNotEmptyP.html", "name": "Predicate\\Common\\IsNotEmptyP", "doc": "&quot;Predicate that all input arguments are not empty&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsNotEmptyP", "fromLink": "Predicate/Common/IsNotEmptyP.html", "link": "Predicate/Common/IsNotEmptyP.html#method___invoke", "name": "Predicate\\Common\\IsNotEmptyP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsNotNullP.html", "name": "Predicate\\Common\\IsNotNullP", "doc": "&quot;Predicate that all input arguments are not null&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsNotNullP", "fromLink": "Predicate/Common/IsNotNullP.html", "link": "Predicate/Common/IsNotNullP.html#method___invoke", "name": "Predicate\\Common\\IsNotNullP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsNullP.html", "name": "Predicate\\Common\\IsNullP", "doc": "&quot;Predicate that all input arguments are null values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsNullP", "fromLink": "Predicate/Common/IsNullP.html", "link": "Predicate/Common/IsNullP.html#method___invoke", "name": "Predicate\\Common\\IsNullP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsNumericP.html", "name": "Predicate\\Common\\IsNumericP", "doc": "&quot;Predicate that all input arguments are numeric values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsNumericP", "fromLink": "Predicate/Common/IsNumericP.html", "link": "Predicate/Common/IsNumericP.html#method___invoke", "name": "Predicate\\Common\\IsNumericP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsObjectP.html", "name": "Predicate\\Common\\IsObjectP", "doc": "&quot;Predicate that all input arguments are objects&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsObjectP", "fromLink": "Predicate/Common/IsObjectP.html", "link": "Predicate/Common/IsObjectP.html#method___invoke", "name": "Predicate\\Common\\IsObjectP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsPrintP.html", "name": "Predicate\\Common\\IsPrintP", "doc": "&quot;Predicate that all input arguments contains only printable characters&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsPrintP", "fromLink": "Predicate/Common/IsPrintP.html", "link": "Predicate/Common/IsPrintP.html#method___invoke", "name": "Predicate\\Common\\IsPrintP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsPunctP.html", "name": "Predicate\\Common\\IsPunctP", "doc": "&quot;Predicate that all input arguments contains any printable character\nwhich is not whitespace or an alphanumeric character&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsPunctP", "fromLink": "Predicate/Common/IsPunctP.html", "link": "Predicate/Common/IsPunctP.html#method___invoke", "name": "Predicate\\Common\\IsPunctP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsResourceP.html", "name": "Predicate\\Common\\IsResourceP", "doc": "&quot;Predicate that all input arguments are resources values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsResourceP", "fromLink": "Predicate/Common/IsResourceP.html", "link": "Predicate/Common/IsResourceP.html#method___invoke", "name": "Predicate\\Common\\IsResourceP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsSameAsP.html", "name": "Predicate\\Common\\IsSameAsP", "doc": "&quot;Predicate that all input arguments are strictly equal to a given argument&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsSameAsP", "fromLink": "Predicate/Common/IsSameAsP.html", "link": "Predicate/Common/IsSameAsP.html#method___construct", "name": "Predicate\\Common\\IsSameAsP::__construct", "doc": "&quot;New instance of this predicate&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Common\\IsSameAsP", "fromLink": "Predicate/Common/IsSameAsP.html", "link": "Predicate/Common/IsSameAsP.html#method___invoke", "name": "Predicate\\Common\\IsSameAsP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsSameP.html", "name": "Predicate\\Common\\IsSameP", "doc": "&quot;Predicate that all arguments are strictly equal&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsSameP", "fromLink": "Predicate/Common/IsSameP.html", "link": "Predicate/Common/IsSameP.html#method___invoke", "name": "Predicate\\Common\\IsSameP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsScalarP.html", "name": "Predicate\\Common\\IsScalarP", "doc": "&quot;Predicate that all input arguments are scalar values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsScalarP", "fromLink": "Predicate/Common/IsScalarP.html", "link": "Predicate/Common/IsScalarP.html#method___invoke", "name": "Predicate\\Common\\IsScalarP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsSpaceP.html", "name": "Predicate\\Common\\IsSpaceP", "doc": "&quot;Predicate that all input arguments contains only whitespace characters&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsSpaceP", "fromLink": "Predicate/Common/IsSpaceP.html", "link": "Predicate/Common/IsSpaceP.html#method___invoke", "name": "Predicate\\Common\\IsSpaceP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsStringP.html", "name": "Predicate\\Common\\IsStringP", "doc": "&quot;Predicate that all input arguments are string values&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsStringP", "fromLink": "Predicate/Common/IsStringP.html", "link": "Predicate/Common/IsStringP.html#method___invoke", "name": "Predicate\\Common\\IsStringP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsUpperP.html", "name": "Predicate\\Common\\IsUpperP", "doc": "&quot;Predicate that all input arguments are uppercase strings&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsUpperP", "fromLink": "Predicate/Common/IsUpperP.html", "link": "Predicate/Common/IsUpperP.html#method___invoke", "name": "Predicate\\Common\\IsUpperP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Common", "fromLink": "Predicate/Common.html", "link": "Predicate/Common/IsXdigit.html", "name": "Predicate\\Common\\IsXdigit", "doc": "&quot;Predicate that all input arguments contains only hexadecimal characters&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Common\\IsXdigit", "fromLink": "Predicate/Common/IsXdigit.html", "link": "Predicate/Common/IsXdigit.html#method___invoke", "name": "Predicate\\Common\\IsXdigit::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/AndP.html", "name": "Predicate\\Framework\\AndP", "doc": "&quot;Composed predicate that represents a short-circuiting logical AND of this predicate and another&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\AndP", "fromLink": "Predicate/Framework/AndP.html", "link": "Predicate/Framework/AndP.html#method___construct", "name": "Predicate\\Framework\\AndP::__construct", "doc": "&quot;Composed predicate that represents  a short-circuiting logical AND of this predicate and another.&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\AndP", "fromLink": "Predicate/Framework/AndP.html", "link": "Predicate/Framework/AndP.html#method___invoke", "name": "Predicate\\Framework\\AndP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/CallableP.html", "name": "Predicate\\Framework\\CallableP", "doc": "&quot;Predicate that represents the result of external callable predicate&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\CallableP", "fromLink": "Predicate/Framework/CallableP.html", "link": "Predicate/Framework/CallableP.html#method___construct", "name": "Predicate\\Framework\\CallableP::__construct", "doc": "&quot;Predicate that represents the result of external callable predicate&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\CallableP", "fromLink": "Predicate/Framework/CallableP.html", "link": "Predicate/Framework/CallableP.html#method___invoke", "name": "Predicate\\Framework\\CallableP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/ComplexP.html", "name": "Predicate\\Framework\\ComplexP", "doc": "&quot;Composed predicate that represents a complex predicate statement&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\ComplexP", "fromLink": "Predicate/Framework/ComplexP.html", "link": "Predicate/Framework/ComplexP.html#method___construct", "name": "Predicate\\Framework\\ComplexP::__construct", "doc": "&quot;Composed predicate that represents a complex predicate statement&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\ComplexP", "fromLink": "Predicate/Framework/ComplexP.html", "link": "Predicate/Framework/ComplexP.html#method_andP", "name": "Predicate\\Framework\\ComplexP::andP", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\ComplexP", "fromLink": "Predicate/Framework/ComplexP.html", "link": "Predicate/Framework/ComplexP.html#method_orP", "name": "Predicate\\Framework\\ComplexP::orP", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\ComplexP", "fromLink": "Predicate/Framework/ComplexP.html", "link": "Predicate/Framework/ComplexP.html#method_negate", "name": "Predicate\\Framework\\ComplexP::negate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\ComplexP", "fromLink": "Predicate/Framework/ComplexP.html", "link": "Predicate/Framework/ComplexP.html#method___invoke", "name": "Predicate\\Framework\\ComplexP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/DualP.html", "name": "Predicate\\Framework\\DualP", "doc": "&quot;Predicate that represents the predicate on two arguments&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\DualP", "fromLink": "Predicate/Framework/DualP.html", "link": "Predicate/Framework/DualP.html#method___construct", "name": "Predicate\\Framework\\DualP::__construct", "doc": "&quot;Predicate that represents the predicate on two arguments&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\DualP", "fromLink": "Predicate/Framework/DualP.html", "link": "Predicate/Framework/DualP.html#method___invoke", "name": "Predicate\\Framework\\DualP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/FalseP.html", "name": "Predicate\\Framework\\FalseP", "doc": "&quot;Opaque predicate that is always false&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\FalseP", "fromLink": "Predicate/Framework/FalseP.html", "link": "Predicate/Framework/FalseP.html#method___construct", "name": "Predicate\\Framework\\FalseP::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\FalseP", "fromLink": "Predicate/Framework/FalseP.html", "link": "Predicate/Framework/FalseP.html#method___invoke", "name": "Predicate\\Framework\\FalseP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/FloatP.html", "name": "Predicate\\Framework\\FloatP", "doc": "&quot;Predicate that represents the predicate only on float arguments&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\FloatP", "fromLink": "Predicate/Framework/FloatP.html", "link": "Predicate/Framework/FloatP.html#method___construct", "name": "Predicate\\Framework\\FloatP::__construct", "doc": "&quot;Predicate that represents the predicate only on float arguments&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\FloatP", "fromLink": "Predicate/Framework/FloatP.html", "link": "Predicate/Framework/FloatP.html#method___invoke", "name": "Predicate\\Framework\\FloatP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/IfElseP.html", "name": "Predicate\\Framework\\IfElseP", "doc": "&quot;Composed predicate that represents if\/else predicate&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\IfElseP", "fromLink": "Predicate/Framework/IfElseP.html", "link": "Predicate/Framework/IfElseP.html#method___construct", "name": "Predicate\\Framework\\IfElseP::__construct", "doc": "&quot;Composed predicate that represents if\/else predicate&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\IfElseP", "fromLink": "Predicate/Framework/IfElseP.html", "link": "Predicate/Framework/IfElseP.html#method___invoke", "name": "Predicate\\Framework\\IfElseP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/IfP.html", "name": "Predicate\\Framework\\IfP", "doc": "&quot;Composed predicate that represents if predicate&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\IfP", "fromLink": "Predicate/Framework/IfP.html", "link": "Predicate/Framework/IfP.html#method___construct", "name": "Predicate\\Framework\\IfP::__construct", "doc": "&quot;Composed predicate that represents if predicate&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\IfP", "fromLink": "Predicate/Framework/IfP.html", "link": "Predicate/Framework/IfP.html#method___invoke", "name": "Predicate\\Framework\\IfP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/IntP.html", "name": "Predicate\\Framework\\IntP", "doc": "&quot;Predicate that represents the predicate only on int arguments&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\IntP", "fromLink": "Predicate/Framework/IntP.html", "link": "Predicate/Framework/IntP.html#method___construct", "name": "Predicate\\Framework\\IntP::__construct", "doc": "&quot;Predicate that represents the predicate only on int arguments&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\IntP", "fromLink": "Predicate/Framework/IntP.html", "link": "Predicate/Framework/IntP.html#method___invoke", "name": "Predicate\\Framework\\IntP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/NotP.html", "name": "Predicate\\Framework\\NotP", "doc": "&quot;Framework, that is logical negation of the other predicate&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\NotP", "fromLink": "Predicate/Framework/NotP.html", "link": "Predicate/Framework/NotP.html#method___construct", "name": "Predicate\\Framework\\NotP::__construct", "doc": "&quot;Framework, that is logical negation of the other predicate&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\NotP", "fromLink": "Predicate/Framework/NotP.html", "link": "Predicate/Framework/NotP.html#method___invoke", "name": "Predicate\\Framework\\NotP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/OrP.html", "name": "Predicate\\Framework\\OrP", "doc": "&quot;Composed predicate that represents the short-circuiting logical OR of this predicate and another&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\OrP", "fromLink": "Predicate/Framework/OrP.html", "link": "Predicate/Framework/OrP.html#method___construct", "name": "Predicate\\Framework\\OrP::__construct", "doc": "&quot;Composed predicate that represents the short-circuiting logical OR of this predicate and the\nother predicates&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\OrP", "fromLink": "Predicate/Framework/OrP.html", "link": "Predicate/Framework/OrP.html#method___invoke", "name": "Predicate\\Framework\\OrP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/Predicate.html", "name": "Predicate\\Framework\\Predicate", "doc": "&quot;A functional predicate that may be true or false&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\Predicate", "fromLink": "Predicate/Framework/Predicate.html", "link": "Predicate/Framework/Predicate.html#method___invoke", "name": "Predicate\\Framework\\Predicate::__invoke", "doc": "&quot;Invokes a predicate on the subjects and returns the result that may be true or false\ndepending on the predicate subjects&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/SingleP.html", "name": "Predicate\\Framework\\SingleP", "doc": "&quot;Predicate that represents the predicate on single argument&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\SingleP", "fromLink": "Predicate/Framework/SingleP.html", "link": "Predicate/Framework/SingleP.html#method___construct", "name": "Predicate\\Framework\\SingleP::__construct", "doc": "&quot;Predicate that represents the predicate on single argument&quot;"},
                    {"type": "Method", "fromName": "Predicate\\Framework\\SingleP", "fromLink": "Predicate/Framework/SingleP.html", "link": "Predicate/Framework/SingleP.html#method___invoke", "name": "Predicate\\Framework\\SingleP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Predicate\\Framework", "fromLink": "Predicate/Framework.html", "link": "Predicate/Framework/StringP.html", "name": "Predicate\\Framework\\StringP", "doc": "&quot;Predicate that represents the predicate only on string arguments&quot;"},
                                                        {"type": "Method", "fromName": "Predicate\\Framework\\StringP", "fromLink": "Predicate/Framework/StringP.html", "link": "Predicate/Framework/StringP.html#method___construct", "name": "Predicate\\Framework\\StringP::__construct", "doc": "&quot;Predicate that represents the predicate only on string arguments&quot;"},
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


