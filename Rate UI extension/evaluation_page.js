$(document).ready(function () {
	chrome.runtime.sendMessage({greeting: "gimme_evaluation_info"}, function(response) {
		$('body').html(response.evalInfo);
		$('body').prepend('<h1>Rate UI</h1><h2 id="results_title">Evaluation Results</h2><button id="download_button">Download as Word document</button>');
		



		var modifyDocument = null;
	    var processFiles = null;
	    var saveDocument = null;

	    (function (root) {  // root = global
	        "use strict";

	        var XAttribute = Ltxml.XAttribute;
	        var XCData = Ltxml.XCData;
	        var XComment = Ltxml.XComment;
	        var XContainer = Ltxml.XContainer;
	        var XDeclaration = Ltxml.XDeclaration;
	        var XDocument = Ltxml.XDocument;
	        var XElement = Ltxml.XElement;
	        var XName = Ltxml.XName;
	        var XNamespace = Ltxml.XNamespace;
	        var XNode = Ltxml.XNode;
	        var XObject = Ltxml.XObject;
	        var XProcessingInstruction = Ltxml.XProcessingInstruction;
	        var XText = Ltxml.XText;
	        var XEntity = Ltxml.XEntity;
	        var cast = Ltxml.cast;
	        var castInt = Ltxml.castInt;

	        var A = openXml.A;
	        var A14 = openXml.A14;
	        var Pic = openXml.Pic;
	        var R = openXml.R;
	        var W = openXml.W;
	        var WP = openXml.WP;
	        var NN = openXml.NoNamespace;

	        var wNs = openXml.wNs;
	        var aNs = openXml.aNs;
	        var picNs = openXml.picNs;
	        var a14Ns = openXml.a14Ns;
	        var rNs = openXml.rNs;

	        root.processFiles = function (files) {
	            var file = files[0];
	            var reader = new FileReader();
	            reader.onload = function (e) {
	                // when this event is invoked, the document has been loaded
	                openedFileName = file.name;
	                openedFileData = e.target.result;
	            };
	            reader.readAsArrayBuffer(file);
	        }

	        var openedFileName = null;
	        var openedFileData = null;

	        root.modifyDocument = function () {
	            /*if (openedFileName === null || openedFileData === null) {
	                alert("You must open a file first.");
	            }
	            else {*/
	                /******************************************************************************/
	                // open the document
	                
    			var blankDocument = "UEsDBBQABgAIAAAAIQDfpNJsWgEAACAFAAATAAgCW0NvbnRlbnRfVHlwZXNdLnhtbCCiBAIooAAC" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0" +
"lMtuwjAQRfeV+g+Rt1Vi6KKqKgKLPpYtUukHGHsCVv2Sx7z+vhMCUVUBkQpsIiUz994zVsaD0dqa" +
"bAkRtXcl6xc9loGTXmk3K9nX5C1/ZBkm4ZQw3kHJNoBsNLy9GUw2ATAjtcOSzVMKT5yjnIMVWPgA" +
"jiqVj1Ykeo0zHoT8FjPg973eA5feJXApT7UHGw5eoBILk7LXNX1uSCIYZNlz01hnlUyEYLQUiep8" +
"6dSflHyXUJBy24NzHfCOGhg/mFBXjgfsdB90NFEryMYipndhqYuvfFRcebmwpCxO2xzg9FWlJbT6" +
"2i1ELwGRztyaoq1Yod2e/ygHpo0BvDxF49sdDymR4BoAO+dOhBVMP69G8cu8E6Si3ImYGrg8Rmvd" +
"CZFoA6F59s/m2NqciqTOcfQBaaPjP8ber2ytzmngADHp039dm0jWZ88H9W2gQB3I5tv7bfgDAAD/" +
"/wMAUEsDBBQABgAIAAAAIQAekRq37wAAAE4CAAALAAgCX3JlbHMvLnJlbHMgogQCKKAAAgAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArJLBasMw" +
"DEDvg/2D0b1R2sEYo04vY9DbGNkHCFtJTBPb2GrX/v082NgCXelhR8vS05PQenOcRnXglF3wGpZV" +
"DYq9Cdb5XsNb+7x4AJWFvKUxeNZw4gyb5vZm/cojSSnKg4tZFYrPGgaR+IiYzcAT5SpE9uWnC2ki" +
"Kc/UYySzo55xVdf3mH4zoJkx1dZqSFt7B6o9Rb6GHbrOGX4KZj+xlzMtkI/C3rJdxFTqk7gyjWop" +
"9SwabDAvJZyRYqwKGvC80ep6o7+nxYmFLAmhCYkv+3xmXBJa/ueK5hk/Nu8hWbRf4W8bnF1B8wEA" +
"AP//AwBQSwMEFAAGAAgAAAAhANZks1H0AAAAMQMAABwACAF3b3JkL19yZWxzL2RvY3VtZW50Lnht" +
"bC5yZWxzIKIEASigAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArJLLasMwEEX3hf6DmH0t" +
"O31QQuRsSiHb1v0ARR4/qCwJzfThv69ISevQYLrwcq6Yc8+ANtvPwYp3jNR7p6DIchDojK971yp4" +
"qR6v7kEQa1dr6x0qGJFgW15ebJ7Qak5L1PWBRKI4UtAxh7WUZDocNGU+oEsvjY+D5jTGVgZtXnWL" +
"cpXndzJOGVCeMMWuVhB39TWIagz4H7Zvmt7ggzdvAzo+UyE/cP+MzOk4SlgdW2QFkzBLRJDnRVZL" +
"itAfi2Myp1AsqsCjxanAYZ6rv12yntMu/rYfxu+wmHO4WdKh8Y4rvbcTj5/oKCFPPnr5BQAA//8D" +
"AFBLAwQUAAYACAA6tr9Cb9ZMkRMCAAB1BwAAEQAAAHdvcmQvZG9jdW1lbnQueG1spZXfbtowFMbv" +
"K/UdIt9DEgpdFZFUVdtVvZhUrd0DGMdJrMY+lm1g7NV2sUfaK+yY8KewBEHhgtj6zvn58zmO8/f3" +
"n/HtT1kHM26sAJWSuB+RgCsGuVBlSn68fe3dkMA6qnJag+IpWXBLbrPLi/E8yYFNJVcuQISyyVyz" +
"lFTO6SQMLau4pLYvBTNgoXB9BjKEohCMh3MweTiI4mg50gYYtxbXu6dqRi25vAg+/Bq2/B8NmisU" +
"CzCSOpyaMpTUvE91D5fS1ImJqIVb4ELRdSsTUjI1KlnxehurPj9prK4erenmGEdN/sOqUEsvoeE1" +
"ugNlK6E7dvtZNIpVK3F2aK8zWbcmzXU8PK+jD4bO8dFBP2aXeUOQdbPBE/BxdER/Pa89/Rhzu27W" +
"HiUVqsPSp8rZ1Z14dBptcJCmy/Na/WRgqjvQ4jz0s3pvB/v76ATw6vx0VsCeZ/O1onr/qpAseS4V" +
"GDqp0SsegADbFvgXi2Q+Em/RCeSLrMnCmc7WAJyYbEvDqcvGof/fRITbED/WW4zlzL2YAHUr8u8p" +
"iaLocXT1eEc+4nX5+gtD8KjHg8Ew2rMeoFShNLpBKdzN+0Y92wG+wvGwJdMvLMrKdcsTcA5kt17z" +
"4kB2xWnO8QL+MmiVCwB3QC6nbinvbYtBbVG1mjLe5O7I+LV7MiL33oTiL8IxrM7V9TbKt6Cpe9Pa" +
"cNNbP1x/LLN/UEsDBBQABgAIAAAAIQCXPvo1TQYAAJkbAAAVAAAAd29yZC90aGVtZS90aGVtZTEu" +
"eG1s7FlLj9s2EL4X6H8QdHcs25Ifi3gDW7aTNrtJkN2kyJGWaYsxJRoivbtGEKBIjgUKFH2ghxYo" +
"0Bf6TIEG6KW9JH+sQ0qyRJvGIs0GDdrsghY5+mb4cYackezLV84iap3ghBMWd+3aJce2cBywCYln" +
"XfvO8ajSti0uUDxBlMW4a68wt6/sv/3WZbQnQhxhC/Rjvoe6dijEYq9a5QGIEb/EFjiGe1OWREjA" +
"MJlVJwk6BbsRrdYdp1mNEIltK0YRmL05nZIAW8fSpL2fGx9S+IgFl4KAJkfSNNY0FHYyr8kLX3Gf" +
"JtYJol0b5pmw02N8JmyLIi7gRtd21J9d3b9cXStRsUO3pDdSf5lepjCZ15VeMhuvFV3Xc5u9tX0F" +
"oGIbN2wNm8Pm2p4CoCCAlaZcyliv3+kPvAxbAqVdg+1Ba9CoafiS/cYWvufJfw2vQGnX3cKPRn7h" +
"wxIo7XoGn7TqvqvhFSjtNrfwLac3cFsaXoFCSuL5Ftrxmg0/X+0aMmX0mhHe8dxRq57BC1S1tLtS" +
"/Vjs2msRus+SEQBUcJEgsSVWCzxFAeB8RMk4IdYBmYWw8RYoZhzETt0ZOQ34lP+u6imPoD2MStqp" +
"KOBbIsnH4kFCFqJrvwtW7RLk+eNnT54/evYntF9K/d8tGHwNnUfQnpb6f2T9x6oV8ieGua6heLYx" +
"108A/R7aR9D/Ga5fQntfzvWjnBTaVxnoE2ifmm3yDZvfAvRXaB9A/xu4/gXtY7Oq2FD9DqCfQfsN" +
"+pLW06wv5Z9D+xD6P8BVMTKY7CVoXDZ5TCLMrRv41LrNInC0gQQeJy+mcRwiUtboxTOOYiR1DOih" +
"CDX0jRWiyIDrYz02dxNIWybg1eV9jfBRmCwFMQCvh5EGPGSM9lliXNN1OVfZC8t4Zp48WZZxtxE6" +
"Mc3tb+yK4XIB54+YTPoh1mjeorAt0AzHWFjyHptjbFC7R4jm10MSJIyzqbDuEauPiNElx2Ss7bhC" +
"6RqJIC4rE0GIt+abw7tWn1GT+QE+0ZFw3hA1mcRUc+NVtBQoMjJGES0jD5AITSSPVkmgOZwLiPQM" +
"U2YNJ5hzk87NZKXRvQ7pzhz2Q7qKdGQiyNyEPECMlZEDNvdDFC2MnEkclrHv8DlsUWTdYsJIgukn" +
"RI4hDijeGe67BGvhPv9s34FMb94g8s4yMR0JzPTzuKJThJXx6kZ9iUh8brHZKDPev1BmyslW9r+Q" +
"dcGcv/9n5aSXEON53iwiu3CbpcNnyYS8/pVjgJbxLQyH1QB9UzjeFI7/fOHYdZ4vvlwUFUK90uQv" +
"LspMtPMtZkooPRIrig+4qi0cljcZgVANlNL6pWkRQjebTsPNEqT6VsLEe0SERyFawDQ1NcOMZ6Zn" +
"3FowDtVJiY225Q26jA7ZJJXWavl7OiggUcihuuVyqIUilTZbxQvp2rwazdQXBzkBqfsiJEqT6SQa" +
"BhKtXHgOCbWyC2HRMbBoS/M7WahLFhU4fxaSX/F4bsoI9huieCLjlOrn0b3wSO9ypr7sumF5Hcn1" +
"YiKtkShtN51EaRuGaII3xRcc604RUo2edMU2jVb7VcRaJpGN3EBjfWSdwplreGAmQIuuPYXnUuhG" +
"C7DHZd5EdBZ37UBkjv4nmWWRcDFAPExh6la6/ogInFiURLDXy2GgccGtVm/JNb6m5DrO6+c5dSkH" +
"GU+nOBA7JMUQ7qVGjHdfEiwHbAmkj8LJqTWmy+Q2Akd5rZp04IRwsfbmhCSlzV14cSNdZUdR+/6w" +
"OKKILkKUVZRyMk/hqr+mU1qHYrq5Kn2cLWY8k0F66ap7vpK8UUqaOwqIrJrm/PHqinyJVZH3NVZp" +
"6t7MdZ081+2qEi9fEErUisk0apKxgVoh1ald4ANBabr11txVIy66GmzuWlkg8udKNdr6oYaN78PO" +
"H8Dj6pIKrqjiM3hH8POv2NNMoKR5djkT1jIhXfuB4/Vcv+75FaftDStuw3Uqba/XqPQ8r1EbejVn" +
"0K8/BKeIMKp56dwjeJ+hq+x3KCXf+i0qyh+zLwUsqjL1HFxVyuq3qFp9929RFgHPPGjWR51Gp9+s" +
"dBq9UcUd9NuVjt/sVwZNvzUYDXyv3Rk9tK0TBXZ7Dd9tDtuVZs33K27TkfTbnUrLrdd7bqvXHrq9" +
"h5mvYeX5NXev4rX/NwAAAP//AwBQSwMEFAAGAAgAAAAhAMhHJLDQAwAAUQoAABEAAAB3b3JkL3Nl" +
"dHRpbmdzLnhtbLRW227bOBB9X2D/wdDzOpZk2bGFOkUS29sU8XZRpR9AiZRNhDeQlB232H/fISVG" +
"TmoU2S36ZGrO3Dg8M+N37584G+yJNlSKRZRcxNGAiEpiKraL6MvDejiLBsYigRGTgiyiIzHR+6vf" +
"f3t3yA2xFtTMAFwIk/NqEe2sVfloZKod4chcSEUEgLXUHFn41NsRR/qxUcNKcoUsLSmj9jhK43ga" +
"dW7kImq0yDsXQ04rLY2srTPJZV3TinQ/wUK/JW5rspRVw4mwPuJIEwY5SGF2VJngjf9fbwDugpP9" +
"jy6x5yzoHZL4Ddc9SI2fLd6SnjNQWlbEGHggzkKCVPSBs+8cPce+gNjdFb0rME9ifzrNfPLfHKSv" +
"HBj2lpu00D0tNdItT7pr8Cq/2wqpUcmAlXCdAWQUXQEtv0rJB4dcEV3B2wCn41k0cgBURNaFRZYA" +
"bBRhzJO8YgSJVgOTGjXMPqCysFKB1h5Blpdp3MLVDmlUWaILhSqwvZXCasmCHpZ/SXsLxNZQ987C" +
"07w/FW3LgIVAHPJ+0QYbiYHTh7zR9O2ldQY+Otz+JOTrQBJaXFNMHly9CntkZA3JF/QruRb4Y2Ms" +
"BY++GX4igx8lQISL/Ale+OGoyJog20CZflEw/xJrRtWGai31ncDAhF8WjNY10RCAArM2QB+q5cHX" +
"+QNBGCbrT8YdndII5jQ24fBZShtU43iZjLP4us3UoT0SJ9nqcnwWGY+T2+l5ZJqOb84i2eV8ct5m" +
"NRmvzmaQpfHqenUOmWfxcjI/jySr9eU5pL/p6LkiPHfz928dTo7eA95a3CJeaooGGzehR06j1I83" +
"VAS8JDByyClSNGUAh8MWMBwxtob+D4AfCjzH1Kglqf2ZbZDe9n47DX1WCrPm47MvN6mI/lPLRrXo" +
"QSPV0jaoJFnWWVJh7ykPctOURbASMCRPoEbgT3vt69SX55BboJ9v/3vkaex1iRh+KTqaM104ipIN" +
"UqplerlNFhGj251NHDktfGFY5P6j3KYdlnosbTH/gSp3M9DuDr0sDbITvXGQjXtZFmRZL5sE2aSX" +
"TYNs6mQ7mDEaxvsjNF04OnktGZMHgj/0+HeitghmhxRZtvsA6CVbQbcgzGCfkyfYLQRTC/+PFMUc" +
"PblVk/rG6LQZOsrGvtB1mFNWLz1gZFFo9xfGnuKvcnF7qqJAx+LIy379XLSJM2pgRCnYVFbqgP3h" +
"sWTiV5h9ABY/wsN+JvUNMgR3GJbVHXZrtLX5NplN5+MkTYbL9XQ9zGZxNryZT2bD9DqbJtfLeXwz" +
"Hf/TdWH4L3j1LwAAAP//AwBQSwMEFAAGAAgAAAAhAPoRxd7qAQAA/AUAABIAAAB3b3JkL2ZvbnRU" +
"YWJsZS54bWy8k9FumzAUhu8n7R2Q7xsMSZoUlVRp1kiTtl1s3QMYx4A1bCMfJyxvv4MhdBqKkkjb" +
"iITIf+yP40+Hx6efqgoOwoI0OiXRhJJAaG52Uhcp+f66vVuSABzTO1YZLVJyFECeVu/fPTZJbrSD" +
"APdrSBRPSelcnYQh8FIoBhNTC43F3FjFHP61RaiY/bGv77hRNXMyk5V0xzCm9J70GHsNxeS55OKD" +
"4XsltPP7QysqJBoNpazhRGuuoTXG7mpruADAM6uq4ykm9YCJZiOQktwaMLmb4GH6jjwKt0fUP6nq" +
"DTC/DRAPAMWTj4U2lmUVysdOAoSRVW8/aBLNFBY2rJKZlb5QM21ARFg7sColNKZbOsd7+5vRaXsn" +
"YbuQl8yCaCHdQtrFOVOyOp5SaCRAV6il4+UpPzAr26a6EsgCC3vIaEpeKF7xdku6JErJDIP1Zkji" +
"9l3+ivpkOiS0TbjndCse/C7uOcMafGfYGRiZeJVKQPBFNMFXo5g+YySm92hijj5aM9ObjFjPvdVI" +
"vP7dyAaTxXI2HRl5uGyk41xvpJ+N4JMsSnd2Qtq5+F8Tsm5bjl/+mJCYLp5HPvzp//KEWJHt8St0" +
"wedvZ3Q8+/HohHgp/1SH7zheLt509KcYj8dlHfSijv4BVr8AAAD//wMAUEsDBBQABgAIAAAAIQBb" +
"bf2TCQEAAPEBAAAUAAAAd29yZC93ZWJTZXR0aW5ncy54bWyU0cFKAzEQBuC74DssubfZFhVZui2I" +
"VLyIoD5Ams62wUwmzKSu9ekda61IL/WWSTIfM/yT2TvG6g1YAqXWjIa1qSB5Woa0as3L83xwbSop" +
"Li1dpASt2YKY2fT8bNI3PSyeoBT9KZUqSRr0rVmXkhtrxa8BnQwpQ9LHjhhd0ZJXFh2/bvLAE2ZX" +
"wiLEULZ2XNdXZs/wKQp1XfBwS36DkMqu3zJEFSnJOmT50fpTtJ54mZk8iOg+GL89dCEdmNHFEYTB" +
"Mwl1ZajL7CfaUdo+qncnjL/A5f+A8QFA39yvErFbRI1AJ6kUM1PNgHIJGD5gTnzD1Auw/bp2MVL/" +
"+HCnhf0T1PQTAAD//wMAUEsDBBQABgAIAAAAIQDb2L3vdwEAAMsCAAAQAAgBZG9jUHJvcHMvYXBw" +
"LnhtbCCiBAEooAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJxSy07DMBC8I/EPUe7UaSWq" +
"Fm2NUBHiwKNS0/Zs2ZvEwrEt26D279k0EIK4kdPO7O5oZmO4PbYm+8AQtbOrfDop8gytdErbepXv" +
"yoerRZ7FJKwSxllc5SeM+S2/vIBNcB5D0hgzkrBxlTcp+RvGomywFXFCbUudyoVWJIKhZq6qtMR7" +
"J99btInNimLO8JjQKlRXfhDMe8Wbj/RfUeVk5y/uy5MnPQ4ltt6IhPyl2zQT5VILbGChdEmYUrfI" +
"Z0QPADaixsinwPoCDi4owjOa6ktYNyIImeiCfL5cABthuPPeaCkS3ZY/axlcdFXKXs+Gs24f2HgE" +
"KMQW5XvQ6cQLYGMIT9qSgWtgfUHOgqiD8M2XvQHBVgqDa4rPK2EiAvshYO1aLyzJsaEivbe486W7" +
"7y7xtfKbHIU86NRsvZBkYTFdjuOOOrAlFhX5HywMBDzSLwmm06ddW6P6nvnb6A64798mn15PCvrO" +
"F/vmKPfwaPgnAAAA//8DAFBLAwQUAAYACAAAACEAeMytLXIBAADrAgAAEQAIAWRvY1Byb3BzL2Nv" +
"cmUueG1sIKIEASigAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjJJdT8IwFIbvTfwPS+9H" +
"OxZFlzESP7iSxEQMxrvaHqCydU17YPDv7TYYLnLh3fl4z9PTt00n+yIPdmCdKvWYRANGAtCilEqv" +
"xuR9Pg3vSOCQa8nzUsOYHMCRSXZ9lQqTiNLCqy0NWFTgAk/SLhFmTNaIJqHUiTUU3A28QvvmsrQF" +
"R5/aFTVcbPgK6JCxW1oAcsmR0xoYmo5IjkgpOqTZ2rwBSEEhhwI0OhoNInrWItjCXRxoOr+UhcKD" +
"gYvSU7NT753qhFVVDaq4kfr9I/oxe3lrrhoqXXslgGSpFAkqzCFL6Tn0kdt+fYPAttwlPhYWOJY2" +
"e7ZKBIu1Qmgkp3Jt+AYOVWml88O9zMskOGGVQf+MLbpX8OqcO5z5d10qkA+H3il/u/WAhZ2qf0U2" +
"ahRdmh4tbjcDGXhrktbIU2cRPz7NpyQbsigO2U0Ys3k0SlicMPZZL9ebPwOL4wL/IUY1MbrvE0+A" +
"1p/+98x+AAAA//8DAFBLAwQUAAYACAAAACEAH0+xos4MAAAfewAADwAAAHdvcmQvc3R5bGVzLnht" +
"bOyd31PcOBLH36/q/gfXPN09EBgYIKGWbAGBg1qSsBmyedbYGkaLbc35Rwj7158kyx6ZtjxuWUfl" +
"qu4Jxp7+SNa3u6X2j/Evv/5I4uA7zXLG09PJ9M3eJKBpyCOWPpxOvt5f7bydBHlB0ojEPKWnk2ea" +
"T359//e//fJ0khfPMc0DAUjzkyQ8nayKYn2yu5uHK5qQ/A1f01TsXPIsIYX4mD3sJiR7LNc7IU/W" +
"pGALFrPieXd/b+9oojHZEApfLllIP/CwTGhaKPvdjMaCyNN8xdZ5TXsaQnviWbTOeEjzXBx0Ele8" +
"hLC0wUxnAJSwMOM5XxZvxMHoHimUMJ/uqf+SeAM4xAH2G0ASntw8pDwji1iMvuhJIGCT92L4Ix5+" +
"oEtSxkUuP2Z3mf6oP6k/Vzwt8uDphOQhY/eiZQFJmOBdn6U5m4g9lOTFWc5I586V/KdzT5gXxuZz" +
"FrHJrmwx/0vs/E7i08n+fr3lQvagtS0m6UO9jaY7X+dmT4xNC8E9nZBsZ34mDXf1gVV/jcNdv/yk" +
"Gl6TkKl2yLKgwrOmR3sSGjPpyPuH7+oPX0o5tqQsuG5EAaq/DXYXjLhwOOF+8yoKxF66vOXhI43m" +
"hdhxOlFtiY1fb+4yxjPh6aeTd6pNsXFOE3bNooimxhfTFYvotxVNv+Y02mz//Up5q94Q8jIV/x8c" +
"T5UXxHl0+SOka+n7Ym9KpCafpEEsv12yTePK/N81bKqV6LJfUSITQDB9iVDdRyH2pUVuHG03s3xx" +
"7OpbqIYOXquh2Ws1dPhaDR29VkPHr9XQ29dqSGH+mw2xNKI/qkCEzQDqNo4lGtEcS7ChOZZYQnMs" +
"oYLmWCIBzbE4Oppj8WM0x+KmCE7BQ5sXGs5+YPH2fu72OcKNu31KcONunwHcuNsTvht3e353425P" +
"527c7dnbjbs9WeO51VIruBFhlhajo2zJeZHyggYF/TGeRlLBUlWRH56c9Gjm5SA9YKrMpifi0bSQ" +
"qM/bPUQFqft8XshCLuDLYMkeykwU02M7TtPvNBZlbUCiSPA8AjNalJllRFx8OqNLmtE0pD4d2x9U" +
"VoJBWiYLD765Jg/eWDSNPA9fTfSSFBqHFvXzSgYJ8+DUCQkzPr5rnHjLD7csHz9WEhKcl3FMPbE+" +
"+XExxRpfGyjM+NJAYcZXBgozvjAwNPM1RJrmaaQ0zdOAaZqncav809e4aZqncdM0T+OmaePH7Z4V" +
"sUrx5qpjOvzc3UXM5Xns0f2Ys4eUiAXA+OlGnzMN7khGHjKyXgXyrHQ31jxmbDvnPHoO7n3MaQ3J" +
"17peuciFOGqWluMHtEXzFVwNz1N4NTxPAdbwxofYR7FMlgu0az/1zLxcFJ1Bq0iDgnZO4rJa0I6P" +
"NlKM97BNAFyxLPcWBt1YDx78SS5npZw+Mt+ml+M7tmGND6uXWclr9zTSQy9jHj76ScPXz2uaibLs" +
"cTTpiscxf6KRP+K8yHjla2bI7ytJBoX8ZbJekZypWqmFGD7V11fAg49kPfqA7mLCUj+6Xe4khMWB" +
"vxXE9f3H2+Cer2WZKQfGD/CcFwVPvDH1mcB/fKOLf/rp4JkogtNnT0d75un0kIJdMA+TTEXikSeS" +
"WGaylHmZQxXvN/q84CSL/NDuMlrddFJQT8Q5SdbVosNDbIm8+CTyj4fVkOL9QTImzwv5Cqp7LzDj" +
"tGFeLv6k4fhU94kHXs4MfS4Ldf5RLXWVtT/c+GVCCzd+iaDUFNOD9F8PB9vCjT/YFs7XwV7EJM+Z" +
"9RKqM8/X4dY838c7vvjTPB7zbFnG/gawBnobwRrobQh5XCZp7vOIFc/jASue7+P16DKK5+GUnOL9" +
"K2ORNzEUzJcSCuZLBgXzpYGCeRVg/B06Bmz8bToGbPy9OhXM0xLAgPnyM6/Tv6erPAbMl58pmC8/" +
"UzBffqZgvvzs4ENAl0uxCPY3xRhIXz5nIP1NNGlBkzXPSPbsCXkZ0wfi4QRpRbvL+FI+jcDT6iZu" +
"D0h5jjr2uNiucL5E/kYX3romWT775eGMKIljzj2dW9tMOMqyfe/aNjP1JMfoLtzFJKQrHkc0sxyT" +
"3VbUy/PqsYyX3VfdGHTa85Y9rIpgvmrO9puYo72tlnXB3jLb3mDXmB/Vz7N0mX2kESuTuqPwYYqj" +
"g+HGyqNbxrPtxpuVRMvycKAlbPNou+VmldyyPB5oCdt8O9BSxWnLsi8ePpDssdMRjvv8p6nxLM53" +
"3OdFjXFns32O1Fh2ueBxnxe1QiU4C0N5tQCqMyxm7PbDgsduj4kiOwUTTnbK4LiyI/oC7Av9zuTM" +
"jkmaqr3m7gmQ99UielDm/L3k1Xn71gWn4Q913YiFU5rToJNzMPzCVSvL2MdxcLqxIwbnHTticAKy" +
"IwZlIqs5KiXZKYNzkx0xOEnZEehsBWcEXLaC9rhsBe1dshWkuGSrEasAO2LwcsCOQAcqRKADdcRK" +
"wY5ABSowdwpUSEEHKkSgAxUi0IEKF2C4QIX2uECF9i6BCikugQop6ECFCHSgQgQ6UCECHagQgQ5U" +
"x7W91dwpUCEFHagQgQ5UiEAHqlovjghUaI8LVGjvEqiQ4hKokIIOVIhABypEoAMVItCBChHoQIUI" +
"VKACc6dAhRR0oEIEOlAhAh2o1aOG7oEK7XGBCu1dAhVSXAIVUtCBChHoQIUIdKBCBDpQIQIdqBCB" +
"ClRg7hSokIIOVIhABypEoANVXSwcEajQHheo0N4lUCHFJVAhBR2oEIEOVIhABypEoAMVItCBChGo" +
"QAXmToEKKehAhQh0oEJEn3/qS5S22+yn+LOe1jv2h1+60p36Yj7KbaIOhqPqXtlZw59FOOf8Meh8" +
"8PBA1RvDIGwRM65OUVsuq5tcdUsE6sLn54v+J3xM+sgfXdLPQqhrpgA+G2oJzqnM+lzetARF3qzP" +
"001LsOqc9WVf0xJMg7O+pKvisr4pRUxHwLgvzRjGU4t5X7Y2zOEQ9+VowxCOcF9mNgzhAPflY8Pw" +
"MJDJ+aX14cBxOmruLwWEPnc0CMd2Qp9bQq3qdAwDY6hodsJQ9eyEoTLaCSg9rRi8sHYUWmE7yk1q" +
"GGZYqd0D1U7ASg0JTlIDjLvUEOUsNUS5SQ0TI1ZqSMBK7Z6c7QQnqQHGXWqIcpYaotykhlMZVmpI" +
"wEoNCVipR07IVoy71BDlLDVEuUkNF3dYqSEBKzUkYKWGBCepAcZdaohylhqi3KQGVTJaakjASg0J" +
"WKkhwUlqgHGXGqKcpYaoPqnVWZSW1CiFDXPcIswwxE3IhiEuORuGDtWSYe1YLRkEx2oJalVrjquW" +
"TNHshKHq2QlDZbQTUHpaMXhh7Si0wnaUm9S4aqlLavdAtROwUuOqJavUuGqpV2pctdQrNa5askuN" +
"q5a6pMZVS11SuydnO8FJaly11Cs1rlrqlRpXLdmlxlVLXVLjqqUuqXHVUpfUIydkK8Zdaly11Cs1" +
"rlqyS42rlrqkxlVLXVLjqqUuqXHVklVqXLXUKzWuWuqVGlct2aXGVUtdUuOqpS6pcdVSl9S4askq" +
"Na5a6pUaVy31Sm2plnafWi9gkmz1QjLx5eJ5TeVvcBsPzETVb5Dqi4DqizdR86IkaSx7EuhXUunN" +
"qsP6gmHVojLc0lQD11crq/c0mfjN65VUCwuS0+izHA3QeCp/mq9ju/wJu3p73czFimTV3s1g1d/R" +
"7rA5lqeTLBcVqt69t/duNr280o6rX5/1SOn6k2hfbZMfbllKc/Vp82athfxVKzEC+zP19I9+0ZZ2" +
"G179bNDt97hpSCunm+h9Sxn5s+ctZXLnpd4m97deVNay3LyoTG4+b15UFko3q/u1f3k8O1c5RX1Z" +
"ueDphCgHVB6jNsu7IgTo/KoibF51dtDxqrNqm/HGMovvhEI2Eupf3rK4qf4F3eYRMPX7uS+9yvIz" +
"uxaP0L63uYxefa91ybzX5wsZrj19VuHcG19VxFtdVvvsth6K/iziyo/EPzepdOon/bKzqqfRD1Kh" +
"xP4LGscfSfVtvrZ/NaZLGXhi73RP/eDCi/2L6rcDrfaZmmSsgN12Z6qP/X5SvU1A3/1gTWcyk3YM" +
"t7oVZ+xIY/NfdUPJy85UW30kPkXqy3pTnYdQaQ+8NdB8Z2CV5eA7A2U6SeXrFEoS6+fbf5pEtzkg" +
"ddA79ag80qwZ+n294tiktEO9DjJTWrUNmdLCMheRoiZpkCIaATudJNho+8JTOvNht39s8w27P/xf" +
"sy7NWquNl7LpnWKRPVK6ZulkS1k/s3g/y8qimaHbc7K8NAEDTi2+1a4u1czJ3CJJ/fMjbU1m+3uX" +
"Z5fjE+wmlWJm+3OeRTRTtUE126teydcj6IH5S5RK6h/RJ9q8YLWSqEntei3gZNusE5ys61WEkzET" +
"bhrR63Hmf7iZVwsac/j/l5Ze9X/5+/8AAAD//wMAUEsBAi0AFAAGAAgAAAAhAN+k0mxaAQAAIAUA" +
"ABMAAAAAAAAAAAAAAAAAAAAAAFtDb250ZW50X1R5cGVzXS54bWxQSwECLQAUAAYACAAAACEAHpEa" +
"t+8AAABOAgAACwAAAAAAAAAAAAAAAACTAwAAX3JlbHMvLnJlbHNQSwECLQAUAAYACAAAACEA1mSz" +
"UfQAAAAxAwAAHAAAAAAAAAAAAAAAAACzBgAAd29yZC9fcmVscy9kb2N1bWVudC54bWwucmVsc1BL" +
"AQItABQABgAIADe2v0Jv1kyREwIAAHUHAAARAAAAAAAAAAAAAAAAAOkIAAB3b3JkL2RvY3VtZW50" +
"LnhtbFBLAQItABQABgAIAAAAIQCXPvo1TQYAAJkbAAAVAAAAAAAAAAAAAAAAACsLAAB3b3JkL3Ro" +
"ZW1lL3RoZW1lMS54bWxQSwECLQAUAAYACAAAACEAyEcksNADAABRCgAAEQAAAAAAAAAAAAAAAACr" +
"EQAAd29yZC9zZXR0aW5ncy54bWxQSwECLQAUAAYACAAAACEA+hHF3uoBAAD8BQAAEgAAAAAAAAAA" +
"AAAAAACqFQAAd29yZC9mb250VGFibGUueG1sUEsBAi0AFAAGAAgAAAAhAFtt/ZMJAQAA8QEAABQA" +
"AAAAAAAAAAAAAAAAxBcAAHdvcmQvd2ViU2V0dGluZ3MueG1sUEsBAi0AFAAGAAgAAAAhANvYve93" +
"AQAAywIAABAAAAAAAAAAAAAAAAAA/xgAAGRvY1Byb3BzL2FwcC54bWxQSwECLQAUAAYACAAAACEA" +
"eMytLXIBAADrAgAAEQAAAAAAAAAAAAAAAACsGwAAZG9jUHJvcHMvY29yZS54bWxQSwECLQAUAAYA" +
"CAAAACEAH0+xos4MAAAfewAADwAAAAAAAAAAAAAAAABVHgAAd29yZC9zdHlsZXMueG1sUEsFBgAA" +
"AAALAAsAwQIAAFArAAAAAA==";

	                var doc = new openXml.OpenXmlPackage(blankDocument);
	                var mainPart = doc.mainDocumentPart();
	                var image_index = 0;
					function appendText(text_type, text_string){
						if (text_type == "paragraph"){
							var p = new XElement(W.p,
							    new XElement(W.r,
							        new XElement(W.t, text_string)));
						} else if (text_type == "title"){
							var p = new XElement(W.p,
		                        new XElement(W.pPr,
		                            new XElement(W.pStyle, new XAttribute(W.val, "Title"))),
		                        new XElement(W.r,
		                            new XElement(W.t, text_string)));
						} else if (text_type == "heading"){
							var p = new XElement(W.p,
		                        new XElement(W.pPr,
		                            new XElement(W.pStyle, new XAttribute(W.val, "Heading1"))),
		                        new XElement(W.r,
		                            new XElement(W.t, text_string)));
						}

						// Append the paragraph to the document.
						var body = doc.mainDocumentPart().getXDocument().root.element(W.body);
						var lastPara = body.elements(W.p).lastOrDefault();
						if (lastPara !== null) {
						    lastPara.addAfterSelf(p);
						}
					}

					appendText("title", "Rate UI Results");


					//window.annotation = [];
					$('.annotation').each(function(){

						// Heuristic

		           			var heuristic = $(this).children('.heuristic').html();
		           			appendText("heading", heuristic);

		           		// rate
		           		
		           			var rate = $(this).children('.rate').html();
		           			appendText("heading", rate);

			           	// Image

			           		var image_src = $(this).children('img').attr('src');
			           		var aspect_ratio = $(this).children('img').height() / $(this).children('img').width();
			           		
			           		var imageRId = "rId9234"+image_index;
			           		image_src = image_src.substring(22);
			           		var width_emu = 6.5*914400; //6.5 inches times conversion unit
			           		var height_emu = Math.round(width_emu * aspect_ratio);

		           			if (image_src != undefined){
			           			var newimagePart = doc.addPart('/word/media/image'+image_index+'.png', openXml.contentTypes.png, "base64", image_src);
			           			mainPart.addRelationship(imageRId,
							    openXml.relationshipTypes.image,
							    "media/image"+image_index+".png", "Internal");
			           		

				           		var p = new XElement(W.p, 
					           				new XElement(W.r,
							           			new XElement(W.drawing,
											        new XElement(WP.inline,
											            new XAttribute("distT", "0"),
											            new XAttribute("distB", "0"),
											            new XAttribute("distL", "0"),
											            new XAttribute("distR", "0"),
											            new XElement(WP.extent,
											                new XAttribute("cx", width_emu),
											                new XAttribute("cy", height_emu)
											            ),
											            new XElement(WP.effectExtent,
											                new XAttribute("l", "0"),
											                new XAttribute("t", "0"),
											                new XAttribute("r", "0"),
											                new XAttribute("b", "0")
											            ),
											            new XElement(WP.docPr,
											                new XAttribute("id", "1"),   
											                new XAttribute("name", 'image'+image_index)                                        
											            ),
											            new XElement(WP.cNvGraphicFramePr,
											                new XElement(A.graphicFrameLocks,
											                    new XAttribute(XNamespace.xmlns+"a", aNs),
											                    new XAttribute("noChangeAspect", "1"))
											            ),
											            new XElement(A.graphic,
											                    new XAttribute(XNamespace.xmlns+"a", aNs),
											                    new XElement(A.graphicData,
											                        new XAttribute("uri", picNs),
											                        new XElement(Pic._pic,
											                            new XAttribute(XNamespace.xmlns+"pic", picNs),
											                            new XElement(Pic.nvPicPr,
											                                new XElement(Pic.cNvPr,
											                                    new XAttribute("id", "0"),
											                                    new XAttribute("name", "")
											                                ),
											                                new XElement(Pic.cNvPicPr)
											                            ),
											                            new XElement(Pic.blipFill,
											                                new XElement(A.blip,
											                                    new XAttribute(R.embed, imageRId)
											                                ),
											                                new XElement(A.stretch,
											                                    new XElement(A.fillRect)
											                                )
											                            ),
											                            new XElement(Pic.spPr,
											                                new XElement(A.xfrm,
											                                    new XElement(A.off,
											                                        new XAttribute("x", "0"),
											                                        new XAttribute("y", "0")
											                                    ),
											                                    new XElement(A.ext,
											                                        new XAttribute("cx", width_emu),
											                                        new XAttribute("cy", height_emu)
											                                    )
											                                ),
											                            new XElement(A.prstGeom,
											                                new XAttribute("prst", "rect"),
											                                new XElement(A.avLst)
											                            ),
											                            new XElement(A.effectLst)
											                        )
											                    )
											                )
											            )
											        )
												)
											)
										);
										image_index = image_index+1;
									}
							
							var body = doc.mainDocumentPart().getXDocument().root.element(W.body);
							var lastPara = body.elements(W.p).lastOrDefault();
							if (lastPara !== null) {
							    lastPara.addAfterSelf(p);
							}
					


		           		// Notes
		           			var notes = $(this).children('.notes').html();
		           			if (notes != undefined){
			           			appendText("heading", "Notes:");
			           			appendText("paragraph", notes);
		           			}	

		           		// Recommendation

		           			var recommendation = $(this).children('.recommendation').html();
		           			if (recommendation != undefined){
			           			appendText("heading", "Recommendation:");
			           			appendText("paragraph", recommendation);
			           		}


			           	// Page break

			           		var p = new XElement(W.p,
		                        		new XElement(W.r,
		                        			new XElement(W.br,
		                        				new XAttribute(W.type, "page")
		                        			)
		                        		)
		                        	)
						
							// Append the paragraph to the document.
							var body = doc.mainDocumentPart().getXDocument().root.element(W.body);
							var lastPara = body.elements(W.p).lastOrDefault();
							if (lastPara !== null) {
							    lastPara.addAfterSelf(p);
							}
			        });

		                // serialize it to a blob
		                openedFileData = doc.saveToBlob();

	                /******************************************************************************/
	            //}
	        }

	        root.saveDocument = function () {
            	var openedFileName = "EvaluationResults.docx"
                saveAs(openedFileData, openedFileName);
	        }

	    }(this));


		$("#download_button").click(function(){
			window.modifyDocument();
			window.saveDocument();
		});
	

	});	
});