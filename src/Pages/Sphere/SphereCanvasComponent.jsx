import React, {useEffect, useRef, useState} from 'react';
import './Sphere.css'

function SphereCanvasComponent() {

    const canvasRef = useRef(null);
    const [currentColor, setCurrentColor] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const colors = [
        '#3357C9',
        '#5174E3',
        '#6284EB',
        '#0585B6',
        '#24A691',
        '#242FB3'
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            draw(ctx, 0);
        }
    }, []);

    const toggleAnimation = () => {
        setIsAnimating((prev) => !prev);
    };

    const drawLines = (ctx, currentColorIndex) => {
        ctx.beginPath();
        ctx.arc(260, 266, 230, 0, Math.PI * 2, true);
        ctx.lineWidth = 3;
        ctx.strokeStyle = colors[currentColorIndex];
        ctx.stroke();
    }


    const draw = (ctx) => {


        const gradient = ctx.createLinearGradient(0, 0, canvasRef.current.width, canvasRef.current.height);
        gradient.addColorStop(0, '#000000');
        gradient.addColorStop(0.5, '#a50856');
        gradient.addColorStop(1, '#fdd1e7');

        ctx.beginPath();
        ctx.strokeStyle = '#ea92c0';
        ctx.ellipse(260, 266, 230, 230, 0, 0, Math.PI * 2, true);
        ctx.stroke();

        ctx.beginPath()
        ctx.setLineDash([15]);
        ctx.strokeStyle = '#ea92c0';
        ctx.ellipse(260, 266, 230, 66, 0, 0, Math.PI, true);
        ctx.fillStyle = 'rgba(132, 224, 123, 1)';
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath()
        ctx.setLineDash([0]);
        ctx.moveTo(490, 266);
        ctx.ellipse(260, 266, 230, 66, 0, 0, Math.PI, false);
        ctx.fillStyle = 'rgba(132, 224, 123, 1)';
        ctx.lineWidth = 3;
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.stroke();


        ctx.beginPath();
        ctx.setLineDash([8]);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#e20074';
        ctx.moveTo(260, 99);
        ctx.lineTo(300, 99);
        ctx.lineTo(356, 128);
        ctx.lineTo(260, 266);
        ctx.lineTo(198, 134);
        ctx.lineTo(260, 99);
        ctx.fillStyle = '#e179ad';
        ctx.fill();
        ctx.stroke();


        ctx.beginPath()
        ctx.strokeStyle = '#ea92c0';
        ctx.setLineDash([15]);
        ctx.moveTo(412, 99);
        ctx.ellipse(260, 99, 152, 38, 0, 0, Math.PI, true);
        ctx.fillStyle = 'rgba(132, 224, 123, 1)';
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath()
        ctx.setLineDash([0]);
        ctx.moveTo(412, 99);
        ctx.ellipse(260, 99, 152, 38, 0, 0, Math.PI, false);
        ctx.lineWidth = 3;
        ctx.fillStyle = 'rgba(132, 224, 123, 1)';
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.stroke();


        ctx.beginPath()
        ctx.lineWidth = 2;
        ctx.setLineDash([8]);
        ctx.strokeStyle = '#e20074';
        ctx.moveTo(260, 41);
        ctx.lineTo(260, 266);
        ctx.moveTo(260, 99);
        ctx.lineTo(356, 128);

        ctx.fillStyle = 'rgba(136, 64, 216, 0.53)';
        ctx.fill();
        ctx.stroke();


        ctx.beginPath()
        ctx.setLineDash([8]);
        ctx.strokeStyle = '#e20074';
        ctx.moveTo(260, 99);
        ctx.lineTo(166, 70);
        ctx.stroke();


        ctx.beginPath()
        ctx.strokeStyle = '#e20074';
        ctx.moveTo(166, 70);
        ctx.setLineDash([8]);
        ctx.lineTo(198, 134);

        ctx.stroke();

        ctx.strokeStyle = 'black';
        ctx.beginPath()
        ctx.setLineDash([0]);
        ctx.lineWidth = 3;
        ctx.moveTo(360, 128);
        ctx.arc(356, 128, 4, 0, Math.PI * 2, false);
        ctx.moveTo(264, 99);
        ctx.arc(260, 99, 4, 0, Math.PI * 2, false);
        ctx.moveTo(170, 70);
        ctx.arc(166, 70, 4, 0, Math.PI * 2, false);
        ctx.moveTo(264, 49);
        ctx.arc(260, 47, 4, 0, Math.PI * 2, false);
        ctx.moveTo(264, 266);
        ctx.arc(260, 266, 4, 0, Math.PI * 2, false);

        ctx.fillStyle = '#e20074';
        ctx.fill();
        ctx.stroke();
        ctx.stroke();

        ctx.font = "bold 25px Verdana";
        ctx.fillStyle = "#e16ea9"

        ctx.fillText("O", 249, 295);
        ctx.fillText("O1", 264, 95);
        ctx.fillText("P", 254, 27);
        ctx.fillText("B", 150, 100);
        ctx.fillText("A", 355, 155);

    }


    return (
        <div className="SphereCanvas">
            <canvas
                id="canvas"
                ref={canvasRef}
                width={500}
                height={500}
            />
            <div>
                <button onClick={toggleAnimation}>
                    {isAnimating ? 'Stop Animation' : 'Start Animation'}
                </button>
            </div>
        </div>
    );
}

export default SphereCanvasComponent;