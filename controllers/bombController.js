var bomb = require('../schemas/bomb');


exports.getBomb = {
    handler: function (request, reply) {
        var bombs = bomb.find(request.query);
        reply(bombs);
    }
}

exports.createBomb = {
    handler: function (request, reply) {
        var newBomb = new bomb({
			nombre: request.payload.nombre,
			peso: request.payload.peso,
			tipo: request.payload.tipo,
			detonada: request.payload.detonada,
			destino: request.payload.destino,
			energia: request.payload.energia
        });
        newBomb.save();
        return reply('Bomba Creada');
    }
}

exports.deleteBomb = {
    handler: function (request, reply) {
    if (request.query.id != undefined) {
      var bombs = bomb.find({_id:request.query.id});
      bombs.remove(function (err) {
        if (err) {
          reply('not deleted');
        } else {
          reply('deleted');
        }
      });
    } else {
      return reply("Ingresar un nombre");
    }
  }
}

exports.modifyBomb = {
  handler: function (request, reply) {
    if (request.query.id) {
      var bombs = bomb.find({_id:request.query.id});
      bombs.update({ $set: request.payload }, function (err) {
        if (err) {
          reply('no se edito');
        } else {
          reply('se edito con exito');
        }
      });
    } else {
      return reply("Ingresar un nombre");
    }

  }
}
