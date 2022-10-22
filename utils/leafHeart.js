export default function leafHeart(canvas, context, green, red) {
  function leafHeart(x, y, size, p) {
    // x, y - coord, size - size
    const r = size / 2;
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = green;
    context.fillStyle = green;
    context.arc(x, y, r, p / 2 + 1.94 * Math.PI, 0.5 * Math.PI);
    context.arc(x, y + r / 2.25, r / 1.8, Math.PI * 0.5, 1.7 * Math.PI);
    context.arcTo(x + r / 2.5, y, x + r, y, r);
    context.fill();
    context.beginPath();
    context.lineWidth = r / 20;
    context.arc(
      x - r / 3 + p * 20,
      y + r + p * 20,
      r / 3 + p * 10,
      Math.PI * 1.1,
      1.7 * Math.PI
    );
    context.stroke();
  }
  function heart(x, y, scale2) {
    const xHeart = x + scale2 * 1.4,
      yHeart = y + scale2 * 2.6;
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = red;
    context.fillStyle = red;
    context.arc(xHeart, yHeart, scale2, Math.PI, 2.2 * Math.PI);
    context.lineTo(xHeart - scale2 * 0.95, yHeart + scale2 * 2.2);
    context.arc(
      xHeart - scale2 * 1.95,
      yHeart,
      scale2,
      Math.PI * 0.8,
      2 * Math.PI
    );
    context.fill();
    context.stroke();
  }
  let p = 0,
    sign = 1;
  const x = canvas.width / 2.5,
    y = canvas.height / 4,
    size = Math.min(canvas.width, canvas.height);

  function animate() {
    // 0 < p < 1;
    p = p + 0.01 * sign;
    if (p > 1 || p < 0) sign = sign * -1;

    const scale =
      (size / 10) *
      (1 + 0.2 * Math.sin(Math.PI * p) * Math.cos(Math.PI * p) ** 2);
    const y2 = y - scale;

    context.clearRect(0, 0, canvas.width, canvas.height);
    leafHeart(x, y, size, p / 5);
    heart(x, y2, scale);
    requestAnimationFrame(animate);
  }

  animate();
}
