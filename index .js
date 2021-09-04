const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.rect(0, 0, 600, 600);
        ctx.stroke();


        let prevX;
        let prevY;

        let isDrawing=false;

        canvas.addEventListener('mousedown',function(e){
            isDrawing=true;

        });
        canvas.addEventListener('mouseup',function(e){
            isDrawing = false;
            
        });

        canvas.addEventListener('mousemove', ({x,y}) =>{
            if(!isDrawing){
                prevX = null;
                prevY = null;
                return;
            }
            if (prevX && prevY){
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);
                ctx.lineTo(x,y);
                ctx.stroke();
            }
            prevX= x;
            prevY = y;
        });