
alert("entered scriptJS");
document.getElementById("goal").addEventListener("change",function () {alert('goal changed event'); validateEntries();});


validateEntries = function () {
    alert('entered validateEntries');
    const Entries = ["t1", "t2", "se1", "t3", "t4"];
    let count = 0;
    alert(Entries);
    for (let x in Entries) {
        alert('running for in loop');
        let elem = document.getElementById(Entries[x]).value;
        alert(elem);
//         if (elem.match(/^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/)) {
//             let target = "error_";
//             target = target.concat(Entries[x]);
//             document.getElementById(target).style.display = "none";
//         } else {
//             alert('entered false snippet or regex check');
//             let target = "error_";
//             target = target.concat(Entries[x]);
//             document.getElementById(target).style.display = "block";
//             document.getElementById("goal").value = 0;
//             document.getElementsByTagName("p")[0].style.display = "none";
//             document.getElementsByTagName("p")[1].style.display = "none";
//             count += 1;
//         }
//     };
//     if (count == 0) {
//         calcFinal ();
    };
};

// calcFinal = function () {
//     alert('entered calcfinal');
//     t1 = Number(document.getElementById("t1").value);
//     t2 = Number(document.getElementById("t2").value);
//     se1 = Number(document.getElementById("se1").value);
//     t3 = Number(document.getElementById("t3").value);
//     t4 = Number(document.getElementById("t4").value);
//     val = Number(document.getElementById("goal").value);

//     culmGr = 0.2*(t1+t2+t3+t4)+0.1*se1;
//     grCurr = 0.2*(t1+t2)+0.1*(se1)+0.25*(t3+t4);
//     grCurr = Number(grCurr).toFixed(2);
//     alert(culGr);
//     alert(grCurr);
//     let lowest = "F";

//     if (culmGr >= 89.6) {
//         lowest = "an A";
//     } else if (culmGr >= 79.6) {
//         lowest = "a B";
//     } else if (culmGr >= 69.6) {
//         lowest = "a C";
//     } else if (culmGr >= 59.6) {
//         lowest = "a D";
//     } else if (culmGr >= 39.6) {
//         lowest = "an E";
//     };
//     alert(lowest);
//     switch (val) {
//         case 0:
//             alert("Select a target grade.");
//             break;
//         case 1:
//             final = (89.5-culmGr)/0.1;
//             break;
//         case 2:
//             final = (79.5-culmGr)/0.1;
//             break;
//         case 3:
//             final = (69.5-culmGr)/0.1;
//             break;
//         case 4:
//             final = (59.5-culmGr)/0.1;
//             break;
//         case 5:
//             final = (39.5-culmGr)/0.1;
//     };
//     final = Number(final).toFixed(2);
    
//     document.getElementById("grOverall").style.display = "block";
//     document.getElementById("scoreFinal").style.display = "block";
//     document.getElementById("grade_current").innerHTML = grCurr;
//     document.getElementById("se2").innerHTML = final;
//     if (final < 0) {
//         document.getElementById("comment").innerHTML = "! You cannot possibly get less than " + lowest + ".";
//     } else if (final > 100) {
//         document.getElementById("comment").innerHTML = ". Sorry, it is not possible for you to finish with this grade.";
//     } else {
//         document.getElementById("comment").innerHTML = ".";

//     };
// };




// document.getElementById("t1").addEventListener("change", function () {if(document.getElementById("goal").value!=0){validateEntries();}}); 
// document.getElementById("t2").addEventListener("change", function () {if(document.getElementById("goal").value!=0){validateEntries();}}); 
// document.getElementById("se1").addEventListener("change", function () {if(document.getElementById("goal").value!=0){validateEntries();}}); 
// document.getElementById("t3").addEventListener("change", function () {if(document.getElementById("goal").value!=0){validateEntries();}}); 
// document.getElementById("t4").addEventListener("change", function () {if(document.getElementById("goal").value!=0){validateEntries();}}); 