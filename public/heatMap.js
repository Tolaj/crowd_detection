"use strict";
// ===================================
// ============= HEATMAP =============
// ===================================
class HeatMap {
    constructor(canvas, data) {
        canvas.width = 1920
        canvas.height = 1080
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        this.data = data;
        this.circle = HeatMap.createCanvas();
        this.radius = 65 + 65;
        this.computeRadius(65, 65);
        this.unit8Gradient = HeatMap.computeGradient({
            0.4: "blue",
            0.6: "cyan",
            0.7: "lime",
            0.8: "yellow",
            1.0: "red"
        });
    }
    computeRadius(r, blur) {
        const { circle } = this;
        const ctx = circle.getContext("2d");
        if (!ctx) {
            throw new Error("The ctx is undefined");
        }
        const r2 = this.radius;
        circle.height = r2 * 2;
        circle.width = r2 * 2;
        ctx.shadowOffsetY = r2 * 2;
        ctx.shadowOffsetX = r2 * 2;
        ctx.shadowBlur = blur;
        ctx.shadowColor = "black";
        ctx.beginPath();
        ctx.arc(-r2, -r2, r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.fillText("1", 0, 0);
    }
    resize() {
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    draw(minOpacity) {
        const { ctx } = this;
        if (!ctx) {
            throw new Error("The ctx is undefined");
        }
        ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0, len = this.data.length, p; i < len; i++) {
            p = this.data[i];
            ctx.globalAlpha = Math.min(minOpacity, 1);
            if (!this.circle || !this.radius) {
                throw new Error("The circle || radius is undefined");
            }
            ctx.drawImage(this.circle, p[0] - this.radius, p[1] - this.radius);
        }
        const colored = HeatMap.colorize(ctx.getImageData(0, 0, this.width, this.height), this.unit8Gradient);
        ctx.putImageData(colored, 0, 0);
    }
    static computeGradient(grad) {
        const canvas = HeatMap.createCanvas();
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("The ctx is undefined");
        }
        const gradient = ctx.createLinearGradient(0, 0, 0, 256);
        canvas.width = 1;
        canvas.height = 256;
        Object.keys(grad).forEach((i) => {
            gradient.addColorStop(+i, grad[+i]);
        });
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1, 256);
        return ctx.getImageData(0, 0, 1, 256).data;
    }
    static colorize(imageData, gradient) {
        const pixels = imageData.data;
        for (let i = 0, len = pixels.length, j; i < len; i += 4) {
            j = pixels[i + 3] * 4;
            if (j) {
                pixels[i] = gradient[j];
                pixels[i + 1] = gradient[j + 1];
                pixels[i + 2] = gradient[j + 2];
            }
        }
        return imageData;
    }
    static createCanvas() {
        return document.createElement("canvas");
    }
}
// ===================================
// =========== BOILERPLATE ===========
// ===================================



// 1920x1080
