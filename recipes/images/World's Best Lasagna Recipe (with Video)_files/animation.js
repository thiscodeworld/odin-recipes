var txtTm       = 0.5;
var lglTm       = 0.2;
var beamTm      = 1.35;
var bgTm        = 0.3;
var noTm        = null;

// UPDATED MT PROVIDED BY JIVOX

function masterTimeline() {
	var masterTl = gsap.timeline({});

	var hasDynamicAssetData = true;

	// Get Dynamic Global Background Source
	//const bannerBackground = "url(" + dynamicData['DB_Name'][0]['banner_bg-src'] + ")";

	if (typeof dynamicAssetData != "undefined") {
		if (!dynamicAssetData['Frame-One'] && !dynamicAssetData['Frame-Two'] && !dynamicAssetData['Frame-Three'] && !dynamicAssetData['End-Frame']) {
			hasDynamicAssetData = false;
		}
		if (!hasDynamicAssetData) {
			var F1 = dynamicAssetData['Frame-One'] ? dynamicAssetData['Frame-One'] : "F1-LOGO";
			var F2 = dynamicAssetData['Frame-Two'] ? dynamicAssetData['Frame-Two'] : "F2-DR-C";
			var F3 = dynamicAssetData['Frame-Three'] ? dynamicAssetData['Frame-Three'] : "F3-IMG";
			var F4 = dynamicAssetData['End-Frame'] ? dynamicAssetData['End-Frame'] : "EF-DR-C";
			console.log(dynamicAssetData);
			console.log(F1, F2, F3, F4);

		} else {

			var F1 = dynamicAssetData['Frame-One'] ? dynamicAssetData['Frame-One'] : "";
			var F2 = dynamicAssetData['Frame-Two'] ? dynamicAssetData['Frame-Two'] : "";
			var F3 = dynamicAssetData['Frame-Three'] ? dynamicAssetData['Frame-Three'] : "";
			var F4 = dynamicAssetData['End-Frame'] ? dynamicAssetData['End-Frame'] : "";
			console.log(dynamicAssetData);
			console.log(F1, F2, F3, F4);
		}

	} else {
		var F1 = "F1-LOGO";
		var F2 = "F2-DR-C";
		var F3 = "F3-IMG";
		var F4 = "EF-DR-C";
		console.log("Default");
	}

	masterTl

		// Dynamic Global Background Image and Color
		//.set(['#viewport'], {backgroundImage: bannerBackground }) // Set banner background image
		// .set(['#viewport'], {backgroundColor: `${dynamicData['DB_Name'][0]['banner_color-input']}` }) // Set banner background color

		.add(frameSwitch(F1))
		.add(frameSwitch(F2))
		.add(frameSwitch(F3))
		.add(frameSwitch(F4))
}

function frameSwitch(frame){
    gsap.set([crtv.viewport, crtv.banner, crtv.border], {autoAlpha:1});

    var tl = gsap.timeline();
    switch(frame){
        case 'F1-LOGO': tl.add(frameOneVariantA()); break; // F1-LOGO
        case 'F1-C': tl.add(frameOneVariantB()); break; // F1-C
        case 'F1-IMG': tl.add(frameOneVariantC()); break; // F1-IMG
        case 'F1-D': tl.add(frameOneVariantD()); break; // F1-D LOGO BOX
        // case 'F1-HOLIDAY22': tl.add(frameOneVariantE()); break; // HOLIDAZZLE 2022
        case 'F1-STATIC': tl.add(frameOneVariantF()); break; // F1-STATIC BG ONLY
        case 'F2-DR-C': tl.add(frameTwoVariantA()); break; // FF-DR-C
        case 'F2-C': tl.add(frameTwoVariantB()); break; // FF-C
        case 'F2-DR-IMG': tl.add(frameTwoVariantC()); break; // FF-DR-IMG
        case 'F2-IMG': tl.add(frameTwoVariantD()); break; // FF-IMG
        case 'F2-DL-C': tl.add(frameTwoVariantE()); break; // FF-DL-C
        case 'F2-DL-IMG': tl.add(frameTwoVariantF()); break; // FF-DL-IMG
        case 'F2-DL-IMG-C': tl.add(frameTwoVariantG()); break; // FF-DL-IMG-C
        case 'F2-DR-IMG-C': tl.add(frameTwoVariantH()); break; // FF-DR-IMG-C
        case 'F2-LS-C': tl.add(frameTwoVariantI()); break; // FF-LS-C
        case 'F2-LS-IMG': tl.add(frameTwoVariantJ()); break; // FF-LS-IMG
        case 'F2-LS-IMG-C': tl.add(frameTwoVariantK()); break; // FF-LS-IMG-C
        case 'F2-LS-C-TOP': tl.add(frameTwoVariantL()); break; // FF-LS-C_TOP
        case 'F2-BG-C': tl.add(frameTwoVariantM()); break; // FF-BG-C
        case 'F2-BG-C-BOX': tl.add(frameTwoVariantN()); break; // FF-BG-C-BOX
        case 'F2-STATIC': tl.add(frameTwoVariantP()); break; // FF-STATIC BG ONLY
        case 'F3-DR-C': tl.add(frameThreeVariantA()); break;
        case 'F3-C': tl.add(frameThreeVariantB()); break;
        case 'F3-DR-IMG': tl.add(frameThreeVariantC()); break;
        case 'F3-IMG': tl.add(frameThreeVariantD()); break;
        case 'F3-DL-C': tl.add(frameThreeVariantE()); break;
        case 'F3-DL-IMG': tl.add(frameThreeVariantF()); break;
        case 'F3-DL-IMG-C': tl.add(frameThreeVariantG()); break;
        case 'F3-DR-IMG-C': tl.add(frameThreeVariantH()); break;
        case 'F3-LS-C': tl.add(frameThreeVariantI()); break;
        case 'F3-LS-IMG': tl.add(frameThreeVariantJ()); break;
        case 'F3-LS-IMG-C': tl.add(frameThreeVariantK()); break;
        case 'F3-LS-C-TOP': tl.add(frameThreeVariantL()); break;
        case 'F3-BG-C': tl.add(frameThreeVariantM()); break;
        case 'F3-BG-C-BOX': tl.add(frameThreeVariantN()); break;
        case 'F3-STATIC': tl.add(frameThreeVariantP()); break; // FF-STATIC BG ONLY
        case 'EF-C': tl.add(endFrameVariantA()); break; // EF-C
        case 'EF-DR-C': tl.add(endFrameVariantB()); break; // EF-DR-C
        case 'EF-DR-IMG': tl.add(endFrameVariantC()); break; // EF-DR-IMG
        case 'EF-DR-IMG-C': tl.add(endFrameVariantD()); break; // EF-DR-IMG-C
        case 'EF-IMG': tl.add(endFrameVariantE()); break; // EF-IMG
        case 'EF-DL-C': tl.add(endFrameVariantF()); break; // EF-DL-C
        case 'EF-DL-IMG': tl.add(endFrameVariantG()); break; // EF-DL-IMG
        case 'EF-DL-IMG-C': tl.add(endFrameVariantH()); break; // EF-DL-IMG-C
        case 'EF-LS-C': tl.add(endFrameVariantI()); break; // EF-LS-C
        case 'EF-LS-IMG': tl.add(endFrameVariantJ()); break; // EF-LS-IMG
        case 'EF-LS-IMG-C': tl.add(endFrameVariantK()); break; // EF-LS-IMG-C
        case 'EF-BG-C': tl.add(endFrameVariantL()); break; // EF-BG-C
        case 'EF-STATIC': tl.add(endFrameVariantM()); break; // EF-STATIC BG ONLY
        default: null;
    }
    return tl;
}

//Frame One
function frameOneVariantA(){
    var tl = gsap.timeline();

    document.querySelector('#F1-1_image1-src_300x250').style.display = 'none';
    document.querySelector('#F1-1_image2-src_300x250').style.display = 'none';
    document.querySelector('#F1-bg').style.display = 'none';

    gsap.set(['.F1'], {autoAlpha: 1, force3D: false, rotation: 0.01});
    gsap.set(['#T_Logo'], {x: 85}); // Initial T digit position
    gsap.set(['#Mobile_Logo'], {x: -185}); // Initial T digit position
    gsap.set(['#logoClip1_2'], {clip:'rect(0px, 300px, 250px, 85px)'});

    tl
        .from(['#T_Logo'], {duration: .6, y: -20, opacity: 0, ease: 'Back.easeInOut'}) // y axis bounce in
        .to(['#T_Logo'], {duration:.35, x: 0, ease: 'Power2.easeOut'}, 'logoSync+=.4') // Final T digit position
        .to(['#Mobile_Logo'], {duration:.35, x: 0, opacity: 1, ease: 'Power2.easeOut'}, 'logoSync+=.5')
        .from(['#logoClip1_2'], {duration:.35, clip:'rect(0px, 300px, 250px, 170px)', ease: 'Power2.easeOut'}, 'logoSync+=.5')
        .to(['#T_Logo', '#Mobile_Logo'], {duration:.5, y: 50, opacity: 0, ease: 'Power4.easeIn'}, '+=.6')
    return tl;
}

function frameOneVariantB(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#T_Logo').style.display = 'none';
    document.querySelector('#Mobile_Logo').style.display = 'none';
    document.querySelector('#F1-1_image1-src_300x250').style.display = 'none';
    document.querySelector('#F1-1_image2-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F1-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F1-bound");
    theBound.style.padding = "60px 12px 71px 12px";

    tl
        .set(['.F1' ,'.t_logo'], {autoAlpha:1})
        .set(["#F1-1_copy-input_300x250","#F1-2_copy-input_300x250","#F1-3_copy-input_300x250", "#F1-4_copy-input_300x250"], { y: 20, opacity: 0 })
        .to(['#F1-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F1-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F1-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F1-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#F1-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F1-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F1', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameOneVariantC(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#T_Logo').style.display = 'none';
    document.querySelector('#Mobile_Logo').style.display = 'none';
    document.querySelector('#F1-1_image2-src_300x250').style.display = 'none';
    document.querySelector('#F1-copy').style.display = 'none';

    let theBox = document.getElementById("F1-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F1-bound");
    theBound.style.padding = "181px 12px 58px 12px";

    tl
        .set(['.F1', '.t_logo'], {autoAlpha:1})
        .set(['#F1-1_copy-input_300x250', '#F1-2_copy-input_300x250', '#F1-3_copy-input_300x250', '#F1-4_copy-input_300x250'], {opacity: 0})
        .set(['#F1-1_image1-src_300x250_300x250'], {width: 300, height: 250, y: 0, x: -86,  opacity: 0})
        .to(['#F1-1_image1-src_300x250_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F1-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F1-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F1', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameOneVariantD(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F1-1_image1-src_300x250_300x250').style.display = 'none';
    document.querySelector('#F1-1_image2-src_300x250').style.display = 'none';

    // gsap.set(['#logoClip1_2'], {clip:'rect(0px, 300px, 250px, 400px)'});

    let theLogo = document.getElementById("logo_con");
    theLogo.style.zIndex = "2";
    let theBox = document.getElementById("F1-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F1-bound");
    theBound.style.position = "absolute";
    theBound.style.backgroundColor = "rgba(226, 0, 116,0.85)";
    theBound.style.width = "236px";
    theBound.style.height = "198px";
    theBound.style.top = "26px";
    theBound.style.left = "32px";

    tl
        .set(['.F1'], {autoAlpha: 1, force3D: false})
        .set(['#T_Logo'], {x:3, opacity:0}) // Initial T digit position
        .set(['#Mobile_Logo'], {x:3, opacity:0}) // Initial T digit position
        .set([theBound], {opacity: 0, scaleX:0, scaleY:0})
        .to([theBound], {duration: txtTm, opacity:1, scaleX:1, scaleY:1, ease: 'Power2.easeOut'}, '=0.8')
        .to(['#T_Logo'], {duration: txtTm, opacity:1, ease: 'Power2.easeOut'}, 'logoSync') // Final T digit position
        .to(['#Mobile_Logo'], {duration: txtTm, opacity:1, ease: 'Power2.easeOut'}, 'logoSync')
        // .to(['#T_Logo', '#Mobile_Logo'], {duration:.5, opacity: 0, ease: 'Power4.easeIn'}, '+=.6')
        .set(['.F1', '#T_Logo', '#Mobile_Logo'], {autoAlpha:0, delay:d})
    return tl;
}
// HOLIDAZZLE 22
// function frameOneVariantE(){
//     var d = 1;
//     var tl = gsap.timeline();
//
//     gsap.set(['.F1'], {autoAlpha: 1, force3D: false, rotation: 0.01});
//     gsap.set(['#T_Logo'], {x: 0, opacity:0, scaleX:0, scaleY:0}); // Initial T digit position
//     gsap.set(['#Mobile_Logo'], {x: 0, opacity:0, scaleX:0, scaleY:0}); // Initial T digit position
//     gsap.set(['#F1-1-holiday_image1, #F1-1-holiday_image2, #F1-1-holiday_image3, #F1-1-holiday_image4, #F1-1-holiday_image5, #F1-1-holiday_image6'], {autoAlpha: 1})
//
//     tl
//         .set(['#F1-1-holiday_image1, #F1-1-holiday_image2, #F1-1-holiday_image3, #F1-1-holiday_image4, #F1-1-holiday_image5, #F1-1-holiday_image6'], {width: 300, height: 250, y: 0, x: 0,  opacity: 0})
//         .to(['#F1-1-holiday_image1'], {duration: 1, opacity:1, ease: 'linear.easeNone'}, '=0.05')
//         .to(['#F1-1-holiday_image1'], {duration: 0, opacity:0, }, '=0.05')
//         .to(['#F1-1-holiday_image2'], {duration: 0.1, opacity:1, ease: 'linear.easeNone'}, '-=0.05')
//         .to(['#F1-1-holiday_image2'], {duration: 0, opacity:0, }, '=0.05')
//         .to(['#F1-1-holiday_image3'], {duration: 0.1, opacity:1, ease: 'linear.easeNone'}, '-=0.05')
//         .to(['#F1-1-holiday_image3'], {duration: 0, opacity:0, }, '=0.05')
//         .to(['#F1-1-holiday_image4'], {duration: 0.1, opacity:1, ease: 'linear.easeNone'}, '-=0.05')
//         .to(['#F1-1-holiday_image4'], {duration: 0, opacity:0, }, '=0.05')
//         .to(['#F1-1-holiday_image5'], {duration: 0.1, opacity:1, ease: 'linear.easeNone'}, '-=0.05')
//         .to(['#F1-1-holiday_image5'], {duration: 0, opacity:0, }, '=0.05')
//         .to(['#F1-1-holiday_image6'], {duration: 0.1, opacity:1, ease: 'linear.easeNone'}, '-=0.05')
//         .to(['#F1-1-holiday_image6'], {duration: 1, scale:1.1}, '-=0.1')
//         .to(['#T_Logo'], {duration: 0.2, y: 0, opacity: 1, scaleX:1, scaleY:1, ease: 'Power2.easeOut'}, '-=1.0')
//         .to(['#Mobile_Logo'], {duration: 0.2, y: 0, opacity: 1, scaleX:1, scaleY:1, ease: 'Power2.easeOut'}, '-=1.0')
//         .set(['.F1', '#F1-1-holiday_image6'], {autoAlpha:0, delay:d})
//     return tl;
// }
function frameOneVariantF(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#T_Logo').style.display = 'none';
    document.querySelector('#Mobile_Logo').style.display = 'none';
    document.querySelector('#F1-1_image2-src_300x250').style.display = 'none';
    document.querySelector('#F1-copy').style.display = 'none';

    let theBox = document.getElementById("F1-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F1-bound");
    theBound.style.padding = "181px 12px 58px 12px";

    tl
        .set(['.F1'], {autoAlpha:1})
        .set(['#F1-1_copy-input_300x250', '#F1-2_copy-input_300x250', '#F1-3_copy-input_300x250', '#F1-4_copy-input_300x250'], {opacity: 0})
        .set(['#F1-1_image1-src_300x250_300x250'], {width: 300, height: 250, y: 0, x: -86,  opacity: 0})
        .to(['#F1-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F1-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F1-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F1'], {autoAlpha:0, delay:d})
    return tl;
}
//Frame Two
function frameTwoVariantA(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "65px 122px 78px 12px";

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(["#F2-1_copy-input_300x250","#F2-2_copy-input_300x250","#F2-3_copy-input_300x250", "#F2-4_copy-input_300x250"], { y: 20, opacity: 0 })
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 41, x:181, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: 0.8, x:161, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameTwoVariantB(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-1_image1-src_300x250').style.display = 'none';
    document.querySelector('#F2-1_image2-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "60px 12px 71px 12px";

    tl
        .set(['.F2' ,'.t_logo'], {autoAlpha:1})
        .set(["#F2-1_copy-input_300x250","#F2-2_copy-input_300x250","#F2-3_copy-input_300x250", "#F2-4_copy-input_300x250"], { y: 20, opacity: 0 })
        .to(['#F2-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F2-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F2-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F2-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameTwoVariantC(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "104px 12px 0px 12px";
    theBound.style.width = "182px";

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:181, opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-20, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: 0.8, x:161, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameTwoVariantD(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-copy').style.display = 'none';
    document.querySelector('#F2-1_image2-src_300x250').style.display = 'none';
    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "181px 12px 58px 12px";


    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250', '#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x: -86,  opacity: 0})
        .to(['#F2-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameTwoVariantE(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "65px 12px 76px 119px";

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(["#F2-1_copy-input_300x250","#F2-2_copy-input_300x250","#F2-3_copy-input_300x250", "#F2-4_copy-input_300x250"], { y: 20, opacity: 0 })
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 41, x:-22, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameTwoVariantF(){
    var d = 2.5;
    var tl = gsap.timeline();


    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "16px 12px 0px 130px";
    let lTl = document.getElementById("F2-largerLegal");
    lTl.style.width= "159px";

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(['#F2-copy'], {opacity: 0})
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 42, x:-22, opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:66, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameTwoVariantG(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "119px 12px 61px 131px";

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(['#F2-1_copy-input_300x250','#F2-2_copy-input_300x250','#F2-3_copy-input_300x250','#F2-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 44, x:-22, opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x: 57, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameTwoVariantH(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "125px 140px 55px 12px";

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(['#F2-1_copy-input_300x250','#F2-2_copy-input_300x250','#F2-3_copy-input_300x250','#F2-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 44, x: 201, opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-33, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: 0.8, x:161, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

// Lifestyle Frames I-N
function frameTwoVariantI(){
    var d = 2.5;
    var tl = gsap.timeline();
    document.querySelector('#F2-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.width = "150px";
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.maxHeight = "166px";
    theBound.style.padding = "52px 5px 0px 5px";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.width = "150px";
    legal.style.maxHeight = "76px";

    tl
        .set(['.F2' ,'.t_logo'], {autoAlpha:1})
        .set(['#F2-1_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F2-2_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F2-3_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F2-4_copy-input_300x250'], {y:20,opacity: 0})
        .to(['#F2-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F2-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantJ(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.width = "150px";
    let theBound = document.getElementById("F2-bound");
    theBound.style.maxHeight = "40px";
    theBound.style.padding = "58px 5px 0px 5px";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.width = "150px";
    legal.style.maxHeight = "76px";

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(['#F2-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-20, opacity: 0})
        .to(['#F2-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantK(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.width = "150px";
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.maxHeight = "190px";
    theBound.style.padding = "113px 5px 0px 5px";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.width = "150px";
    legal.style.maxHeight = "60px";

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(['#F2-1_copy-input_300x250','#F2-2_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-20, opacity: 0})
        .to(['#F2-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantL(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.padding = "0";
    theBox.style.height = "135px";
    theBox.style.justifyContent = "unset";
    // theBox.style.backgroundColor = "#e20074";
    let theBound = document.getElementById("F2-bound");
    // theBound.style.height = "unset";
    theBound.style.height = "115px";
    theBound.style.padding = "7px 5px 0px 5px";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.maxHeight = "50px";

    // document.getElementById('F2-1_largerLegal-input_300x250').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.height = "135px";
        legal.style.maxHeight = "unset";
    }

    tl
        .set(['.F2','.t_logo'], {autoAlpha:1})
        .set([theBox], {y:114})
        .set(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250', '#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {y: 20, opacity:0})
        .to(['#F2-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F2-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F2-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F2-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantM(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.width = "162px";
    theBox.style.backgroundColor = "#e20074";
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.maxHeight = "166px";
    theBound.style.padding = "46px 12px 0px 12px";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.padding = "6px 6px 3px 12px";
    legal.style.maxHeight = "60px";

    // document.getElementById('F2-1_frameLegal-input_300x250').style.display = 'none';
    if (legalVisible('F2') === true) {
        legal.style.backgroundColor = "unset";
    }

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(['#F2-frameLegal'], {autoAlpha:0})
        .set(['#F2-1_copy-input_300x250','#F2-2_copy-input_300x250', '#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .to(['#F2-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F2-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .to(['#F2-frameLegal'], lglTm,{autoAlpha:1}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantN(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.position = "absolute";
    theBound.style.backgroundColor = "rgba(226, 0, 116,0.85)";
    theBound.style.width = "216px";
    theBound.style.height = "148px";
    theBound.style.top = "48px";
    theBound.style.left = "42px";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.padding = "6px 6px 3px 12px";
    legal.style.maxHeight = "60px";

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set([theBound], {opacity: 0})
        .set(['#F2-1_copy-input_300x250','#F2-2_copy-input_300x250', '#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .to([theBound], {duration: txtTm, opacity:1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F2-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F2-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantP(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-copy').style.display = 'none';
    document.querySelector('#F2-1_image2-src_300x250').style.display = 'none';
    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "181px 12px 58px 12px";

    tl
        .set(['.F2'], {autoAlpha:1})
        .set(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250', '#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x: -86,  opacity: 0})
        .to(['#F2-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2'], {autoAlpha:0, delay:d})
    return tl;
}
//Frame Three
function frameThreeVariantA(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "65px 122px 78px 12px";

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(["#F3-1_copy-input_300x250","#F3-2_copy-input_300x250","#F3-3_copy-input_300x250", "#F3-4_copy-input_300x250"], { y: 20, opacity: 0 })
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 41, x:181, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: 0.8, x:161, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameThreeVariantB(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-1_image1-src_300x250').style.display = 'none';
    document.querySelector('#F3-1_image2-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "60px 12px 71px 12px";

    tl
        .set(['.F3' ,'.t_logo'], {autoAlpha:1})
        .set(["#F3-1_copy-input_300x250","#F3-2_copy-input_300x250","#F3-3_copy-input_300x250", "#F3-4_copy-input_300x250"], { y: 20, opacity: 0 })
        .to(['#F3-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F3-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F3-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F3-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameThreeVariantC(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "104px 12px 0px 12px";
    theBound.style.width = "182px";

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:181, opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-20, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: 0.8, x:161, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameThreeVariantD(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-copy').style.display = 'none';
    document.querySelector('#F3-1_image2-src_300x250').style.display = 'none';
    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "181px 12px 58px 12px";


    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250', '#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x: -86,  opacity: 0})
        .to(['#F3-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameThreeVariantE(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "65px 12px 76px 119px";

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(["#F3-1_copy-input_300x250","#F3-2_copy-input_300x250","#F3-3_copy-input_300x250", "#F3-4_copy-input_300x250"], { y: 20, opacity: 0 })
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 41, x:-22, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameThreeVariantF(){
    var d = 2.5;
    var tl = gsap.timeline();


    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "16px 12px 0px 130px";
    let lTl = document.getElementById("F3-largerLegal");
    lTl.style.width= "159px";

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(['#F3-copy'], {opacity: 0})
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 42, x:-22, opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:66, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameThreeVariantG(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "119px 12px 61px 131px";

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(['#F3-1_copy-input_300x250','#F3-2_copy-input_300x250','#F3-3_copy-input_300x250','#F3-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 44, x:-22, opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x: 57, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

function frameThreeVariantH(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "125px 140px 55px 12px";

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(['#F3-1_copy-input_300x250','#F3-2_copy-input_300x250','#F3-3_copy-input_300x250','#F3-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 44, x: 201, opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-33, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: 0.8, x:161, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

// Lifestyle Frames I-N
function frameThreeVariantI(){
    var d = 2.5;
    var tl = gsap.timeline();
    document.querySelector('#F3-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.width = "150px";
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.maxHeight = "166px";
    theBound.style.padding = "52px 5px 0px 5px";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.width = "150px";
    legal.style.maxHeight = "76px";

    tl
        .set(['.F3' ,'.t_logo'], {autoAlpha:1})
        .set(['#F3-1_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F3-2_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F3-3_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F3-4_copy-input_300x250'], {y:20,opacity: 0})
        .to(['#F3-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F3-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantJ(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.width = "150px";
    let theBound = document.getElementById("F3-bound");
    theBound.style.maxHeight = "40px";
    theBound.style.padding = "58px 5px 0px 5px";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.width = "150px";
    legal.style.maxHeight = "76px";

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(['#F3-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-20, opacity: 0})
        .to(['#F3-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantK(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.width = "150px";
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.maxHeight = "190px";
    theBound.style.padding = "113px 5px 0px 5px";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.width = "150px";
    legal.style.maxHeight = "60px";

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(['#F3-1_copy-input_300x250','#F3-2_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-20, opacity: 0})
        .to(['#F3-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantL(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.padding = "0";
    theBox.style.height = "135px";
    theBox.style.justifyContent = "unset";
    // theBox.style.backgroundColor = "#e20074";
    let theBound = document.getElementById("F3-bound");
    theBound.style.height = "unset";
    theBound.style.maxHeight = "115px";
    theBound.style.padding = "7px 5px 0px 5px";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.maxHeight = "50px";

    // document.getElementById('F3-1_largerLegal-input_300x250').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.height = "135px";
        legal.style.maxHeight = "unset";
    }

    tl
        .set(['.F3','.t_logo'], {autoAlpha:1})
        .set([theBox], {y:114})
        .set(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250', '#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {y: 20, opacity:0})
        .to(['#F3-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F3-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F3-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F3-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantM(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.width = "162px";
    theBox.style.backgroundColor = "#e20074";
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.maxHeight = "166px";
    theBound.style.padding = "46px 12px 0px 12px";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.padding = "6px 6px 3px 12px";
    legal.style.maxHeight = "60px";

    // document.getElementById('F2-1_frameLegal-input_300x250').style.display = 'none';
    if (legalVisible('F3') === true) {
        legal.style.backgroundColor = "unset";
    }

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(['#F3-frameLegal'], {autoAlpha:0})
        .set(['#F3-1_copy-input_300x250','#F3-2_copy-input_300x250', '#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .to(['#F3-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F3-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .to(['#F3-frameLegal'], lglTm,{autoAlpha:1}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantN(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.position = "absolute";
    theBound.style.backgroundColor = "rgba(226, 0, 116,0.85)";
    theBound.style.width = "216px";
    theBound.style.height = "148px";
    theBound.style.top = "48px";
    theBound.style.left = "42px";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.padding = "6px 6px 3px 12px";
    legal.style.maxHeight = "60px";

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set([theBound], {opacity: 0})
        .set(['#F3-1_copy-input_300x250','#F3-2_copy-input_300x250', '#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .to([theBound], {duration: txtTm, opacity:1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F3-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F3-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantP(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-copy').style.display = 'none';
    document.querySelector('#F3-1_image2-src_300x250').style.display = 'none';
    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "181px 12px 58px 12px";

    tl
        .set(['.F3'], {autoAlpha:1})
        .set(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250', '#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x: -86,  opacity: 0})
        .to(['#F3-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3'], {autoAlpha:0, delay:d})
    return tl;
}
//End Frame
function endFrameVariantA(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-1_image1-src_300x250').style.display = 'none';
    document.querySelector('#EF-1_image2-src_300x250').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.minHeight = "138px";
    theBound.style.maxHeight = "154px";
    //theBound.style.padding = "42px 12px 0px 12px";
    let ctaBound = document.getElementById("CTA-bound");
    //ctaBound.style.padding = "20px 12px 10px 12px";
    ctaBound.style.position = "relative";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF' ,'.t-mobile_logo'], {autoAlpha:1})
        .set(["#EF-1_copy-input_300x250","#EF-2_copy-input_300x250","#EF-3_copy-input_300x250", "#EF-4_copy-input_300x250"], { y: 20, opacity: 0 })
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantB(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.minHeight = "110px";
    theBound.style.maxHeight = "160px";
    theBound.style.padding = "40px 124px 0px 12px";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.padding = "20px 124px 10px 12px";
    ctaBound.style.position = "relative";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(["#EF-1_copy-input_300x250","#EF-2_copy-input_300x250","#EF-3_copy-input_300x250", "#EF-4_copy-input_300x250"], { y: 20, opacity: 0 })
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 42, x:180, opacity: 0})
        .to(['#EF-1_image2-src_300x250'], {duration: 0.8, x:160, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantC(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "118px 130px 10px 12px";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.position = "relative";
    ctaBound.style.width = "100%";
    ctaBound.style.padding = "0px 0px 10px 12px";
    ctaBound.style.left = "-62px";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250', '#EF-3_copy-input_300x250'], {opacity: 0})
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 42, x:180, opacity: 0})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: -10, opacity: 0})
        .to(['#EF-1_image2-src_300x250'], {duration: 0.8, x:160, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantD(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.minHeight = "80px";
    theBound.style.maxHeight = "163px";
    theBound.style.padding = "104px 129px 0px 12px";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.padding = "22px 129px 10px 12px";
    ctaBound.style.position = "relative";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 42, x:180, opacity: 0})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: -10, opacity: 0})
        .set(["#EF-1_copy-input_300x250","#EF-2_copy-input_300x250","#EF-3_copy-input_300x250", "#EF-4_copy-input_300x250"], { x: 0, y: 20, opacity: 0 })
        .to(['#EF-1_image2-src_300x250'], {duration: 0.8, x:160, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, y:0, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_copy-input_300x250','#EF-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-3_copy-input_300x250','#EF-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantE(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-copy').style.display = 'none';
    document.querySelector('#EF-1_image2-src_300x250').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "164px 44px 6px 44px";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.position = "absolute";
    ctaBound.style.width = "100%";
    ctaBound.style.top = "186px";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF' ,'.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: 64,  opacity: 0})
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantF(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.minHeight = "114px";
    theBound.style.maxHeight = "150px";
    theBound.style.padding = "40px 12px 0px 134px";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.padding = "20px 12px 10px 134px";
    ctaBound.style.position = "relative";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(["#EF-1_copy-input_300x250","#EF-2_copy-input_300x250","#EF-3_copy-input_300x250", "#EF-4_copy-input_300x250"], { x: 0, y: 20, opacity: 0 })
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:-32, opacity: 0})
        .to(['#EF-1_image2-src_300x250'], {duration: 0.8, x: -12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantG(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "123px 12px 10px 130px";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.position = "relative";
    ctaBound.style.width = "100%";
    ctaBound.style.padding = "1px 12px 10px 0px";
    ctaBound.style.left = "64px";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250', '#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {opacity: 0})
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 41, x:-32, opacity: 0})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: 10, opacity: 0})
        .to(['#EF-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantH(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.minHeight = "135px";
    theBound.style.maxHeight = "165px";
    theBound.style.padding = "82px 12px 0px 130px";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.padding = "20px 12px 10px 130px";
    ctaBound.style.position = "relative";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 41, x:-32, opacity: 0})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:-10, opacity: 0})
        .set(['#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250', '#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .to(['#EF-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, y:0, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_copy-input_300x250','#EF-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-3_copy-input_300x250','#EF-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

// Lifestyle Frames I-L
function endFrameVariantI(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});
    document.querySelector('#EF-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.width = "150px";
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.minHeight = "111px";
    theBound.style.maxHeight = "151px";
    theBound.style.padding = "39px 5px 0px 5px";
    let legal = document.getElementById("EF-frameLegal");
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.width = "150px";
    legal.style.maxHeight = "76px";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.padding = "8px 12px 10px 12px";
    ctaBound.style.position = "relative";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF' ,'.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#EF-2_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#EF-3_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#EF-4_copy-input_300x250'], {y:20,opacity: 0})
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#EF-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}
function endFrameVariantJ(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    let theBox = document.getElementById("EF-box");
    theBox.style.width = "150px";
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.minHeight = "30px";
    theBound.style.padding = "103px 5px 0px 5px";
    let legal = document.getElementById("EF-frameLegal");
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.width = "150px";
    legal.style.maxHeight = "76px";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.padding = "10px 12px 10px 12px";
    ctaBound.style.position = "relative";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-20, opacity: 0})
        .to(['#EF-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}
function endFrameVariantK(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    let theBox = document.getElementById("EF-box");
    theBox.style.width = "150px";
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.minHeight = "145px";
    theBound.style.maxHeight = "166px";
    theBound.style.padding = "94px 5px 0px 5px";
    let legal = document.getElementById("EF-frameLegal");
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.width = "150px";
    legal.style.maxHeight = "69px";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.padding = "15px 12px 10px 12px";
    ctaBound.style.position = "relative";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_copy-input_300x250','#EF-2_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#EF-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-20, opacity: 0})
        .to(['#EF-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}
function endFrameVariantL(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    let theBox = document.getElementById("EF-box");
    theBox.style.width = "162px";
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.minHeight = "135px";
    theBound.style.maxHeight = "160px";
    theBound.style.padding = "48px 5px 0px 5px";
    let legal = document.getElementById("EF-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.maxHeight = "60px";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.padding = "10px 12px 10px 12px";
    ctaBound.style.position = "relative";

    // document.getElementById('EF-1_frameLegal-input_300x250').style.display = 'none';
    if (legalVisible('EF') === true) {
        legal.style.backgroundColor = "unset";
    }

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo-mag'], {autoAlpha:1})
        .set(['#EF-frameLegal'], {autoAlpha:0})
        .set(['#EF-1_copy-input_300x250','#EF-2_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.1')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .to(['#EF-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.1')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .to(['#EF-frameLegal'], lglTm,{autoAlpha:1}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}
function endFrameVariantM(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-copy').style.display = 'none';
    document.querySelector('#EF-1_image2-src_300x250').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "164px 44px 6px 44px";

    let ctaBound = document.getElementById("CTA-bound");
    // ctaBound.style.display = "none";
    ctaBound.style.position = "absolute";
    ctaBound.style.width = "100%";
    ctaBound.style.top = "186px";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF'], {autoAlpha:1})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: 64,  opacity: 0})
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}
function ctaAnimation () {
    var tl = gsap.timeline({});
    tl.set([".CTA"], {autoAlpha:1, y: 0, x:0}).from(["#CTA-1_copy-input_300x250"], {duration:0.4, rotationX:90, transformOrigin:"0 bottom", perspective:400, rotation:0.001, force3D:true}, "cta")
}
function setSlicedLegal(EFfl, slicedLegal){
    gsap.set(["#EF-frameLegal"], {maxHeight:'36px'});
    if(EFfl.includes('Ver términos')){elById('EF-1_frameLegal-input_300x250').innerHTML = fixHtml(slicedLegal) + "..." + '<a><u>Ver términos.</u></a>'; addLegalEvents();}
    else if(EFfl.includes('See Terms')){elById('EF-1_frameLegal-input_300x250').innerHTML = fixHtml(slicedLegal) + "..." + '<a><u>See Terms.</u></a>'; addLegalEvents();}
}

function fixHtml(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return (div.innerHTML);
}

function addLegalEvents() {
    if (document.querySelectorAll('#EF-1_frameLegal-input_300x250 a').length >= 1) {
        crtv.legalBut = document.querySelectorAll('#EF-1_frameLegal-input_300x250 a')[0];
        crtv.legalBut.addEventListener("mouseover", legalIn);
        crtv.legalBut.addEventListener("click", legalStay);
    }
}

function legalIn() {
    gsap.to(["#EF-1_frameLegal-input_300x250 a"], {duration: 0.3, opacity: 0});
    crtv.legalBut.addEventListener("mouseout", legalOut);
}

function legalStay() {
    gsap.set(["#EF-1_frameLegal-input_300x250 a"], {opacity: 0});
    addClass(crtv.legalBut, "clicked");
    crtv.rollOvOn.addEventListener("click", legalOut);
    if (hasClass(crtv.legalBut, "clicked")) {
        crtv.legalBut.removeEventListener("mouseout", legalOut);
        crtv.legalBut.removeEventListener("mouseover", legalIn);
    }
}

function legalOut() {
    gsap.set(["#EF-1_frameLegal-input_300x250 a"], {opacity: 1});
    removeClass(crtv.legalBut, "clicked");
    crtv.rollOvOn.removeEventListener("click", legalOut);
    crtv.legalBut.addEventListener("mouseover", legalIn);
    crtv.legalBut.addEventListener("mouseout", legalOut);
}
function legalVisible(variant) {
    let pbHeight = document.getElementById( variant + '-1_frameLegal-input_300x250').clientHeight;
    // console.log(pbHeight);

    if (window.getComputedStyle(document.getElementById(variant + '-1_frameLegal-input_300x250')).display === 'none' || pbHeight === 0) {
        return true;
    }

    // if (variant === 'EF') {
    //     if (window.getComputedStyle(document.getElementById( variant + '-1_frameLegal-input_300x250')).display !== 'none') {
    //         let targetCTA = document.getElementById("CTA-bound");
    //         targetCTA.style.height = 90 - pbHeight + "px";
    //         targetCTA.style.paddingTop = "0px";
    //         targetCTA.style.justifyContent = "center";
    //     }
    //     else {
    //         let targetCTA = document.getElementById("CTA-bound");
    //         targetCTA.style.height = "90px";
    //         targetCTA.style.paddingTop = "0px";
    //         targetCTA.style.justifyContent = "center";
    //     }
    // } else {
    //     if (window.getComputedStyle(document.getElementById(variant + '-1_frameLegal-input_300x250')).display === 'none' || pbHeight === 0) {
    //         return true;
    //     }
    // }
}
function ctaVisible(variant) {
    let ctaLength = document.getElementById('CTA-1_copy-input_300x250').childNodes.length;
    // console.log(ctaLength);

    if (ctaLength === 0) {
        // console.log("empty cta");
        return true;
    }
}