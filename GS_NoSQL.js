use('NoSQLMetro');
db.Estacao.drop();
db.Funcionario.drop();
db.Ocorrencia.drop();
db.Usuario.drop();

// ============================ Inserts ============================
use("NoSQLMetro");
db.Estacao.insertMany([
  {"id_estacao":1,"nm_estacao":"Tucuruvi","ordem":1,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":2,"nm_estacao":"Parada Inglesa","ordem":2,"linha":"Azul","ativa":"N","sentido":"JAB"}
  ,{"id_estacao":3,"nm_estacao":"JD. SP Ayrton Senna","ordem":3,"linha":"Azul","ativa":"N","sentido":"JAB"}
  ,{"id_estacao":4,"nm_estacao":"Santana","ordem":4,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":5,"nm_estacao":"Carandiru","ordem":5,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":6,"nm_estacao":"Portuguesa-Tietê","ordem":6,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":7,"nm_estacao":"Armênia","ordem":7,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":8,"nm_estacao":"Tiradentes","ordem":8,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":9,"nm_estacao":"Luz","ordem":9,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":10,"nm_estacao":"São Bento","ordem":10,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":11,"nm_estacao":"Sé","ordem":11,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":12,"nm_estacao":"Liberdade","ordem":12,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":13,"nm_estacao":"São Joaquim","ordem":13,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":14,"nm_estacao":"Vergueiro","ordem":14,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":15,"nm_estacao":"Paraíso","ordem":15,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":16,"nm_estacao":"Ana Rosa","ordem":16,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":17,"nm_estacao":"Vila Mariana","ordem":17,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":18,"nm_estacao":"Santa Cruz","ordem":18,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":19,"nm_estacao":"Praça da Árvore","ordem":19,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":20,"nm_estacao":"Saúde","ordem":20,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":21,"nm_estacao":"São Judas","ordem":21,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":22,"nm_estacao":"Conceição","ordem":22,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":23,"nm_estacao":"Jabaquara","ordem":23,"linha":"Azul","ativa":"S","sentido":"JAB"}
  ,{"id_estacao":24,"nm_estacao":"Jabaquara","ordem":1,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":25,"nm_estacao":"Conceição","ordem":2,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":26,"nm_estacao":"São Judas","ordem":3,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":27,"nm_estacao":"Saúde","ordem":4,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":28,"nm_estacao":"Praça da Árvore","ordem":5,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":29,"nm_estacao":"Santa Cruz","ordem":6,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":30,"nm_estacao":"Vila Mariana","ordem":7,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":31,"nm_estacao":"Ana Rosa","ordem":8,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":32,"nm_estacao":"Paraíso","ordem":9,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":33,"nm_estacao":"Vergueiro","ordem":10,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":34,"nm_estacao":"São Joaquim","ordem":11,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":35,"nm_estacao":"Liberdade","ordem":12,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":36,"nm_estacao":"Sé","ordem":13,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":37,"nm_estacao":"São Bento","ordem":14,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":38,"nm_estacao":"Luz","ordem":15,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":39,"nm_estacao":"Tiradentes","ordem":16,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":40,"nm_estacao":"Armênia","ordem":17,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":41,"nm_estacao":"Portuguesa-Tietê","ordem":18,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":42,"nm_estacao":"Carandiru","ordem":19,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":43,"nm_estacao":"Santana","ordem":20,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":44,"nm_estacao":"JD. SP Ayrton Senna","ordem":21,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":45,"nm_estacao":"Parada Inglesa","ordem":22,"linha":"Azul","ativa":"S","sentido":"TUC"}
  ,{"id_estacao":46,"nm_estacao":"Tucuruvi","ordem":23,"linha":"Azul","ativa":"S","sentido":"TUC"}
]);

use("NoSQLMetro");
db.Funcionario.insertMany([
  {"id_funcionario":1,"nm_funcionario":"Carlos Eduardo Silva","cpf":"12345678901","email":"carlos.silva@metro.sp.gov.br","senha":"1234","cargo":"Operador de Estação"}
  ,{"id_funcionario":2,"nm_funcionario":"Mariana Souza Lima","cpf":"23456789012","email":"mariana.lima@metro.sp.gov.br","senha":"1234","cargo":"Supervisora de Linha"}
  ,{"id_funcionario":3,"nm_funcionario":"Roberto Almeida Santos","cpf":"34567890123","email":"roberto.santos@metro.sp.gov.br","senha":"1234","cargo":"Técnico de Manutenção"}
  ,{"id_funcionario":4,"nm_funcionario":"Fernanda Oliveira Costa","cpf":"45678901234","email":"fernanda.costa@metro.sp.gov.br","senha":"1234","cargo":"Agente de Segurança"}
  ,{"id_funcionario":5,"nm_funcionario":"Paulo Henrique Rocha","cpf":"56789012345","email":"paulo.rocha@metro.sp.gov.br","senha":"1234","cargo":"Coordenador Operacional"}
]);

use("NoSQLMetro");
db.Ocorrencia.insertMany([
  {"id_ocorrencia":1,"tipo_problema":"Problema elétrico","mensagem":"Pane elétrica","status":"N","dt_inicio":new Date("2026-11-12T22:04:40.289Z"),"dt_fim":new Date("2026-11-12T22:04:40.410Z"),"fk_id_funcionario":1,"fk_id_estacao":1}
  ,{"id_ocorrencia":2,"tipo_problema":"Problema mecânico","mensagem":"Falha mecânica","status":"S","dt_inicio":new Date("2026-11-12T22:04:40.292Z"),"dt_fim":null,"fk_id_funcionario":2,"fk_id_estacao":2}
  ,{"id_ocorrencia":3,"tipo_problema":"Problema de segurança","mensagem":"Incidente de segurança","status":"S","dt_inicio":new Date("2026-11-12T22:04:40.292Z"),"dt_fim":null,"fk_id_funcionario":3,"fk_id_estacao":3}
]);

use("NoSQLMetro");
db.Usuario.insertMany([
  {"id_usuario":1,"nm_usuario":"Ana Beatriz Ferreira","email":"ana.ferreira@email.com","senha":"1234"}
  ,{"id_usuario":2,"nm_usuario":"João Pedro Martins","email":"joao.martins@email.com","senha":"1234"}
  ,{"id_usuario":3,"nm_usuario":"Juliana Carvalho","email":"juliana.carvalho@email.com","senha":"1234"}
  ,{"id_usuario":4,"nm_usuario":"Lucas Gabriel Pereira","email":"lucas.pereira@email.com","senha":"123"}
  ,{"id_usuario":5,"nm_usuario":"Beatriz Nascimento","email":"beatriz.nascimento@email.com","senha":"123"}
]);

// ============================ RELATÓRIOS ============================

// Estações inativas da linha Azul
use("NoSQLMetro");
db.Estacao.find({ativa: {$eq: "N"}});

// Listar todos os funcionários com cargo de "Operador de Estação"
use("NoSQLMetro");
db.Funcionario.find({cargo: {$eq: "Operador de Estação"}});

// Listar todos os tipos de problemas registrados nas ocorrências
use("NoSQLMetro");
db.Ocorrencia.distinct("tipo_problema");

 
// Quantidade de funcionários em cada cargo
use("NoSQLMetro");
db.Funcionario.aggregate([
  {$group: {_id: "$cargo", total: {$sum: 1}}},
  {$sort: {total: -1, _id: 1}}
]);