import React, {useEffect, useRef, useState} from 'react';
import './Pyramid.css'

function PyramidCanvasComponent() {
    const canvasRef = useRef(null);
    const [redColor, setRedColor] = useState(220);
    const [greenColor, setGreenColor] = useState(10);
    const [blueColor, setBlueColor] = useState(110);
    const [alphaColor, setAlphaColor] = useState(0.5);

    const handleColorChange = (event, setColor) => {
        setColor(Number(event.target.value));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            drawPyramid(ctx, redColor, greenColor, blueColor, alphaColor);
        }
    }, [redColor, greenColor, blueColor, alphaColor]);

    function drawPyramid(ctx, red, green, blue, alpha) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

        drawBeforeFill(ctx);
        drawCrossSection(ctx);
        drawAfterFill(ctx);
    }

    function drawCrossSection(ctx){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.setLineDash([10]);
        ctx.strokeStyle = '#e20074';
        ctx.moveTo(243, 357);
        ctx.lineTo(309, 273);
        ctx.lineTo(100, 172);
        ctx.lineTo(130, 329);
        ctx.lineTo(244, 355);


        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([0]);
        ctx.stroke();
    }

    function drawBeforeFill(ctx) {
        ctx.beginPath()
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ea92c0';
        ctx.moveTo(167, 48);
        ctx.lineTo(482, 273);
        ctx.lineTo(120, 400);
        ctx.lineTo(47, 273);
        ctx.lineTo(167, 48);

        ctx.stroke();
        ctx.beginPath()
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ea92c0';
        ctx.setLineDash([10]);
        ctx.moveTo(482, 273);
        ctx.lineTo(47, 273);

        ctx.stroke();


    }


    function drawAfterFill(ctx) {

        ctx.beginPath()
        ctx.setLineDash([0]);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#e20074';
        ctx.moveTo(100, 172);
        ctx.lineTo(130, 329);
        ctx.lineTo(244, 355);

        ctx.stroke();

        ctx.beginPath()
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.setLineDash([0]);
        ctx.moveTo(120, 400);
        ctx.lineTo(167, 48);


        ctx.stroke();

        ctx.beginPath()
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ea92c0';
        ctx.setLineDash([0]);
        ctx.moveTo(120, 400);
        ctx.lineTo(167, 48);


        ctx.stroke();

        ctx.beginPath()
        ctx.setLineDash([0]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#939090';
        ctx.moveTo(130, 329);
        ctx.lineTo(163, 490);
        ctx.moveTo(244, 355);
        ctx.lineTo(158, 461);
        ctx.moveTo(120, 400);
        ctx.lineTo(174, 490);

        ctx.stroke();

        ctx.strokeStyle = 'black';
        ctx.beginPath()
        ctx.lineWidth = 2;
        ctx.moveTo(312, 273);
        ctx.arc(309, 273, 4, 0, Math.PI * 2, false);
        ctx.moveTo(103, 172);
        ctx.arc(100, 172, 4, 0, Math.PI * 2, false);
        ctx.moveTo(133, 329);
        ctx.arc(130, 329, 4, 0, Math.PI * 2, false);
        ctx.moveTo(247, 355);
        ctx.arc(244, 355, 4, 0, Math.PI * 2, false);
        ctx.moveTo(161, 460);
        ctx.arc(158, 460, 4, 0, Math.PI * 2, false);

        ctx.fillStyle = '#e20074';
        ctx.fill();
        ctx.stroke();
        ctx.stroke();

        ctx.font = " 25px Verdana";
        ctx.fillStyle = "#fdd1e7"

        ctx.fillText("A", 20, 280);
        ctx.fillText("B", 490, 280);
        ctx.fillText("C", 100, 425);
        ctx.fillText("D", 160, 40);
        ctx.fillText("K", 170, 472);
        ctx.font = "bold 25px Verdana";
        ctx.fillStyle = "#e20074"
        ctx.fillText("M", 71, 160);
        ctx.fillText("H", 304, 260);
        ctx.fillText("N", 97, 350);
        ctx.fillText("G", 245, 383);
    }

    return (
        <div className="PyramidCanvas">
            <div className="controls">
                <input type="range" id="redRange" min="0" max="255" value={redColor}
                       onChange={(e) => handleColorChange(e, setRedColor)}/>
                <input type="range" id="greenRange" min="0" max="255" value={greenColor}
                       onChange={(e) => handleColorChange(e, setGreenColor)}/>
                <input type="range" id="blueRange" min="0" max="255" value={blueColor}
                       onChange={(e) => handleColorChange(e, setBlueColor)}/>
                <input type="range" id="alphaRange" min="0" max="1" step="0.01" value={alphaColor}
                       onChange={(e) => handleColorChange(e, setAlphaColor)}/>
            </div>
            <canvas
                id="canvas"
                ref={canvasRef}
                width={520}
                height={500}
            />
        </div>
    );
}

export default PyramidCanvasComponent;