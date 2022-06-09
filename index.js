const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')

async function main() {

	//Criar um canvas
	const canvas = createCanvas(750, 750)
	const ctx = canvas.getContext('2d')

	//Coloca um fundo branco
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, 750, 750);

	
	// Desenha uma linha preta
	ctx.beginPath()
	ctx.lineWidth = 10;
	ctx.moveTo(0, 250)
	ctx.lineTo(750, 250)
	ctx.strokeStyle = '#000'
	ctx.stroke()

	ctx.beginPath()
	ctx.lineWidth = 10;
	ctx.moveTo(250, 0)
	ctx.lineTo(250, 750)
	ctx.stroke()
	
	ctx.beginPath()
	ctx.lineWidth = 10;
	ctx.moveTo(0, 500)
	ctx.lineTo(750, 500)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineWidth = 10;
	ctx.moveTo(500, 750)
	ctx.lineTo(500, 0)
	ctx.stroke()
	

	//Carregar uma imagem
	const img_x = await loadImage('assets/x.png')
	const img_o = await loadImage('assets/o.png')
	
	async function PlayPos(xy, player) {
		const Pos = {
			a1: [23, 23],
			a2: [273, 23],
			a3: [530, 23],
			
			b1: [23, 273],
			b2: [273, 273],
			b3: [530, 273],
			
			c1: [23, 530],
			c2: [273, 530],
			c3: [530, 530]
		};
		player = player === 1 ? img_x : player === 2 ? img_o : null;
		ctx.drawImage(player, Pos[xy][0], Pos[xy][1], 200, 200);
	}
	
	PlayPos('a1', 1)
	PlayPos('a2', 2)
	PlayPos('a3', 1)


	//Salva a imagem do canvas
	const buffer = canvas.toBuffer('image/png')
	fs.writeFileSync('./result.png', buffer)
	
	
	console.log('Foi!')
}

main();