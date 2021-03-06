const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
        results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
            // // HOVERING
            // let backDist = Math.sqrt(
            //     Math.pow((landmarks[8].x - landmarks[4].x)*canvasElement.width, 2) +
            //     Math.pow((landmarks[8].y - landmarks[4].y)*canvasElement.height, 2)
            // )
            // let frwdDist = Math.sqrt(
            //     Math.pow((landmarks[8].x - landmarks[12].x)*canvasElement.width, 2) +
            //     Math.pow((landmarks[8].y - landmarks[12].y)*canvasElement.height, 2)
            // )
            // if(backDist < 20){
            //     window.history.back()
            // }
            // else if (frwdDist<40){
            //     window.history.forward();
            // }
            //hover
            let HoverDist = Math.sqrt(
                Math.pow((landmarks[8].x - landmarks[5].x)*canvasElement.width, 2) +
                Math.pow((landmarks[8].y - landmarks[5].y)*canvasElement.height, 2)
            );

            if(HoverDist>50){
                console.log("Hovering.");
            }

            //Check Right click
            let RightClickedDist = Math.sqrt(
                Math.pow((landmarks[8].x - landmarks[12].x)*canvasElement.width, 2) +
                Math.pow((landmarks[8].y - landmarks[12].y)*canvasElement.height, 2)
            );
            if( RightClickedDist<22 && HoverDist>30){
                console.log("Right CLicked.");
            }

            //Check Left click
            let LeftClickedDist = Math.sqrt(
                Math.pow((landmarks[8].x - landmarks[4].x)*canvasElement.width, 2) +
                Math.pow((landmarks[8].y - landmarks[4].y)*canvasElement.height, 2)
            );
            if(LeftClickedDist<22 && HoverDist>30){
                console.log("LEft Clicked.")
            }

            //Copy contents to clipboard

            let CopyDist1 = Math.sqrt(
                Math.pow((landmarks[5].x - landmarks[7].x)*canvasElement.width, 2) +
                Math.pow((landmarks[5].y - landmarks[7].y)*canvasElement.height, 2)
            );

            let CopyDist2 = Math.sqrt(
                Math.pow((landmarks[9].x - landmarks[11].x)*canvasElement.width, 2) +
                Math.pow((landmarks[9].y - landmarks[11].y)*canvasElement.height, 2)
            );

            let CopyDist3 = Math.sqrt(
                Math.pow((landmarks[13].x - landmarks[15].x)*canvasElement.width, 2) +
                Math.pow((landmarks[13].y - landmarks[15].y)*canvasElement.height, 2)
            );

            let CopyDist4 = Math.sqrt(
                Math.pow((landmarks[17].x - landmarks[19].x)*canvasElement.width, 2) +
                Math.pow((landmarks[17].y - landmarks[19].y)*canvasElement.height, 2)
            );

            let CopyDist5 =  Math.sqrt(
                Math.pow((landmarks[5].x - landmarks[6].x)*canvasElement.width, 2) +
                Math.pow((landmarks[5].y - landmarks[6].y)*canvasElement.height, 2)
            );

            let CopyDist6 = Math.sqrt(
                Math.pow((landmarks[9].x - landmarks[10].x)*canvasElement.width, 2) +
                Math.pow((landmarks[9].y - landmarks[10].y)*canvasElement.height, 2)
            );

            let CopyDist7 = Math.sqrt(
                Math.pow((landmarks[13].x - landmarks[14].x)*canvasElement.width, 2) +
                Math.pow((landmarks[13].y - landmarks[14].y)*canvasElement.height, 2)
            );

            let CopyDist8 = Math.sqrt(
                Math.pow((landmarks[17].x - landmarks[18].x)*canvasElement.width, 2) +
                Math.pow((landmarks[17].y - landmarks[18].y)*canvasElement.height, 2)
            );

            if((CopyDist1<25 && CopyDist2<25 && CopyDist3<25 && CopyDist4<20)
                ||(CopyDist5<25 && CopyDist6<25 && CopyDist7<25 && CopyDist8<20)){
                console.log("Contents copied to clipboard.");
            }

            //Pasting contents
            let PasteDist = Math.sqrt(
                Math.pow((landmarks[4].x - landmarks[16].x)*canvasElement.width, 2) +
                Math.pow((landmarks[4].y - landmarks[16].y)*canvasElement.height, 2)
            );

            if(PasteDist<22 && HoverDist>30){
                console.log("Contents pasted.");
            }

            //Scroll up
            let ScrollDistUp = Math.sqrt(
                Math.pow((landmarks[8].x - landmarks[7].x)*canvasElement.width, 2) +
                Math.pow((landmarks[8].y - landmarks[7].y)*canvasElement.height, 2)
            );

            if(ScrollDistUp<15){
                console.log("Scrolling up.")
            }

            //Scroll Down
            let ScrollDownDist = Math.sqrt(
                Math.pow((landmarks[12].x - landmarks[11].x)*canvasElement.width, 2) +
                Math.pow((landmarks[12].y - landmarks[11].y)*canvasElement.height, 2)
            );

            if(ScrollDownDist<5){
                console.log("Scrolling down.");
            }

            //Zoom in
            let ZoomInDist = Math.sqrt(
                Math.pow((landmarks[5].x - landmarks[4].x)*canvasElement.width, 2) +
                Math.pow((landmarks[5].y - landmarks[4].y)*canvasElement.height, 2)
            );

            if (ZoomInDist<10){
                console.log("Zooming in.");
            }

            //Zoom out
            let ZoomOutDist = Math.sqrt(
                Math.pow((landmarks[4].x - landmarks[17].x)*canvasElement.width, 2) +
                Math.pow((landmarks[4].y - landmarks[17].y)*canvasElement.height, 2)
            );

            if(ZoomOutDist<35){
                console.log("Zooming out.");
            }

            //Cut contents to clipboard
            let CutDist = Math.sqrt(
                Math.pow((landmarks[20].x - landmarks[15].x)*canvasElement.width, 2) +
                Math.pow((landmarks[20].y - landmarks[15].y)*canvasElement.height, 2)
            );
            if (CutDist<25){
                console.log("Cut");
            }

            //Alternate Gesture 1
            let G1Dist1 = Math.sqrt(
                Math.pow((landmarks[4].x - landmarks[1].x)*canvasElement.width, 2) +
                Math.pow((landmarks[4].y - landmarks[1].y)*canvasElement.height, 2)
            );
            let G2Dist2 = Math.sqrt(
                Math.pow((landmarks[17].x - landmarks[20].x)*canvasElement.width, 2) +
                Math.pow((landmarks[17].y - landmarks[20].y)*canvasElement.height, 2)
            );

            if(CopyDist5<25 && CopyDist6<25 && CopyDist7<25 &&
                G1Dist1>70 && G1Dist2>55){
                console.log("Alternate gesture 1.");
            }
            //Alternate Gesture 2
            let G2Dist1 = Math.sqrt(
                Math.pow((landmarks[5].x - landmarks[8].x)*canvasElement.width, 2) +
                Math.pow((landmarks[5].y - landmarks[8].y)*canvasElement.height, 2)
            );
            if(CopyDist6 < 25 && CopyDist7 < 25 && G1Dist1 > 80 && G1Dist2 > 55
                && G2Dist1 > 60 && (landmarks[8].y)*canvasElement.height<(landmarks[5].y)*canvasElement.height){
                console.log("Alternate Gesture 2");
            }

            drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                {color: '#00FF00', lineWidth: 5});
            drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
        }
    }
    canvasCtx.restore();
}

const hands = new Hands({locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }});
hands.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
    onFrame: async () => {
        await hands.send({image: videoElement});
    },
    width: 1280,
    height: 720
});
camera.start();