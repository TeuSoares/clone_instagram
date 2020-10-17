var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    // Add default routes
    routes: [
      {      
        name: 'home',
        path: '/home/',
        url: 'index.html?b=8',  
        on:{
          pageInit:function(){
            publicacoes();
          },
        },      
      },
      {
        name: 'login',
        path: '/login/',
        url: 'login.html?a=5',
        on:{
          pageInit:function(){
            pageLogin();
          },
        }, 
      },
      {
        path: '/comentarios/',
        url: 'comentarios.html?a=7',
        on:{
          pageInit:function(){
            comentario();
            insertComentario();
          },
        }, 
      },
      {
        path: '/curtidas/',
        url: 'curtidas.html?a=6',
        on:{
          pageInit:function(){
            verLikes();
          },
        }, 
      },
      {
        path: '/seguidores/',
        url: 'seguidores.html?b=1',
        on:{
          pageInit:function(){
            verSeguidores();
          },
        }, 
      },
      {
        path: '/seguidores2/',
        url: 'seguidores2.html?a=2',
        on:{
          pageInit:function(){
            verSeguidores2();
          },
        }, 
      },
      {
        path: '/public/',
        url: 'publicacoes.html?b=4',
        on:{
          pageInit:function(){
            publicacaoUser();
          },
        }, 
      },
      {
        path: '/update/',
        url: 'update_usuario.html?b=4',
        on:{
          pageInit:function(){
            pageUpdate();
          },
        }, 
      },
       {
        path: '/publicacao/',
        url: 'publicacao.html?c=b',
        on:{
          pageInit:function(){
            pagePublicar();
          },
        }, 
      },
      {
        path: '/pesquisar/',
        url: 'pesquisar.html?a=7',
        on:{
          pageInit:function(){
            pesquisa_perfil()
          },
        }, 
      },
      {
        name: 'perfil',
        path: '/perfil/',
        url: 'perfil.html?b=3',
        on:{
          pageInit:function(){
            pagePerfil();
            modoNoturno();
          },
        }, 
      },
      {
        path: '/perfil2/',
        url: 'perfil2.html?a=7',
        on:{
          pageInit:function(){
            pagePerfil2();
          },
        }, 
      },
      {
        path: '/direct/',
        url: 'conversas-recentes.html?a=7',
        on:{
          pageInit:function(){
            conversas_recentes();
          },
        }, 
      },
      {
        path: '/chat/',
        url: 'chat.html?a=7',
        on:{
          pageInit:function(){
            chat();
            inserirConversa();
          },
        }, 
      },
      {
        path: '/enviadas/',
        url: 'mensagem-enviadas.html?a=7',
        on:{
          pageInit:function(){
            enviadas();
          },
        }, 
      },
      {
        path: '/cadastro-usuario/',
        url: 'cadastro-usuario.html?a=7',
        on:{
          pageInit:function(){
            pageCadastro();
          },
        }, 
      },
      {
        path: '/categoria/',
        url: 'categoria.html?a=7',
        on:{
          pageInit:function(){
            categoria();
          },
        }, 
      },
      {
        path: '/perfilProfissional/',
        url: 'perfil-profissional.html?a=7',
        on:{
          pageInit:function(){
            escuroON();
          },
        }, 
      },
      {
        path: '/avaliacao/',
        url: 'avaliacao.html?a=8',
        on:{
          pageInit:function(){
            escuroON();
            verFeedback();
            avaliacao();
          },
        }, 
      },
      {
        path: '/orcamento/',
        url: 'orcamento.html?a=8',
        on:{
          pageInit:function(){
            escuroON();
            orcamento_solicitado();
          },
        }, 
      },
      {
        path: '/resposta_orcamento/',
        url: 'resposta_orcamento.html?a=5',
        on:{
          pageInit:function(){
            escuroON();
            resposta_orcamento();
          },
        }, 
      },
      {
        path: '/feedback-perfil/',
        url: 'inserirFeedback.html?a=7',
        on:{
          pageInit:function(){
            escuroON();
            insertFeedback();
          },
        }, 
      },
      {
        path: '/atividade/',
        url: 'atividade.html?a=5',
        on:{
          pageInit:function(){
            escuroON();
            verAtividades();
          },
        }, 
      },
      {
        path: '/sobre/',
        url: 'sobre.html?a=4',
        on:{
          pageInit:function(){
            escuroON();
            sobre();
          },
        }, 
      },
      {
        path: '/suporte/',
        url: 'suporte.html?a=4',
        on:{
          pageInit:function(){
            escuroON();
            suporte();
          },
        }, 
      },
      {
        path: '/bug/',
        url: 'bug.html?a=4',
        on:{
          pageInit:function(){
            escuroON();
            bug();
          },
        }, 
      },
      {
        path: '/adm/',
        url: 'painel-adm.html?a=b',
        on:{
          pageInit:function(){
            escuroON();
            painelADM();
          },
        }, 
      },
      {
        path: '/anuncio/',
        url: 'anuncio.html?a=b',
        on:{
          pageInit:function(){
            pagePublicarAnuncio();
          },
        }, 
      },
      {
        path: '/verAnuncio/',
        url: 'verAnuncio.html?a=8',
        on:{
          pageInit:function(){
            verAnuncio();
            escuroON();
          },
        }, 
      },
      {
        name: 'verOrcamentosPRO',
        path: '/verOrcamentosPRO/',
        url: 'orcamentos_realizar.html?a=5',
        on:{
          pageInit:function(){
            escuroON();
            verOrcamentosRealizar();
          },
        }, 
      },
      {
        path: '/orcamento_cliente/',
        url: 'verOrcamentoCliente.html?a=5',
        on:{
          pageInit:function(){
            escuroON();
            resultOrcamentoCliente();
          },
        }, 
      },
      {
        path: '/page-orcamento/',
        url: 'orcamentos_clientes.html?a=7',
        on:{
          pageInit:function(){
            escuroON();
            verRespostaProfissional();
          },
        }, 
      },
      {
        path: '/solitacaoOrcamentos/',
        url: 'solicitacaoOrcamentos.html?a=6',
        on:{
          pageInit:function(){
            escuroON();
            solicitacao_orcamento();
          },
        }, 
      },
    ],
    // ... other parameters
  });
  var mainView = app.views.create('.view-main'); 

  var ptrContent = $('.ptr-content');

  ptrContent.on('ptr:refresh',function(){
    publicacoes();
    setTimeout(function(){
      app.ptr.done();
    },1000);
  });

// Verificando se usuário já está logado
const cod_usuario = localStorage.getItem('id_usuario');

var popup = app.popup.open(".popup-inicial");

setTimeout(function(){
  var popupClose = app.popup.close(".popup-inicial", true);
}, 3000);

function modoNoturno(){
  $(".off").click(function(){
    localStorage.setItem("modo","escuro");
    escuroON();
  });
  $(".on").click(function(){
    localStorage.setItem("modo","claro");
    escuroON();
  });
}

function online(){
  $(document).ready(function(){
    if(cod_usuario){
      $(".online").html("Online");
    }
  });
}

function escuroON(){

  $(document).ready(function(){

    var modo_escuro = localStorage.getItem("modo");

    if(modo_escuro == "escuro"){
      $(".bg").addClass("theme-dark");
      $(".bg-black").addClass("bg-white");
      $(".white").addClass("text-color-white");
      $(".black").removeClass("black");
      $(".red").addClass("bg-red");
      $(".page").css({"background-color":"black"});
      $(".panel").css({"background-color":"black"});
      $(".totalLikes").css({"color":"white"});
      $(".button-noturno").removeClass("text-color-black");
      $(".button-noturno").addClass("text-color-white");
      $(".button-noturno").removeClass("color-black");
      $(".button-noturno").addClass("color-white");
      $(".button-noturno").removeClass("bg-color-black");
      $(".button-noturno").addClass("bg-color-white");
      $(".button-noturno").addClass("text-color-black");
      $(".camera").css("border","1px solid white");
      $(".tabbar .tab-link-active, .tabbar-labels .tab-link-active").css({"color":"white"});
      $(".list ul").css({"background-color":"black"});
      $(".off").hide();
      $(".on").show();
      $(".preload").css({"background-color":"#000000"});
      $('.imageLoad').attr('src',"img/load-white.svg");
      $(".atividade-li .list li").css("border-bottom","1px solid rgb(255,255,255,0.1)");
      $(".swiper-pagination-bullet").css({"background-color":"white"});
      $(".sair").css("border-top","1px solid rgb(255,255,255,0.2)");
      $(".black-font").addClass("text-color-white");
    }else{
      $(".bg").removeClass("theme-dark");
      $(".bg-black").removeClass("bg-white");
      $(".white").removeClass("text-color-white");
      $(".black").addClass("black");
      $(".red").removeClass("bg-red");
      $(".page").css({"background-color":"white"});
      $(".panel").css({"background-color":"white"});
      $(".totalLikes").css({"color":"black"});
      $(".button-noturno").addClass("text-color-black");
      $(".button-noturno").removeClass("text-color-white");
      $(".button-noturno").addClass("color-black");
      $(".button-noturno").removeClass("color-white");
      $(".button-noturno").addClass("bg-color-white");
      $(".button-noturno").removeClass("bg-color-white");
      $(".button-noturno").removeClass("text-color-black");
      $(".camera").css("border","1px solid black");
      $(".tabbar .tab-link-active, .tabbar-labels .tab-link-active").css({"color":"black"});
      $(".list ul").css({"background-color":"white"});
      $(".badge").addClass("color-yellow");
      $(".badge").removeClass("color-white");
      $(".badge").css({"color":"white"});
      $(".off").show();
      $(".on").hide();
      $(".preload").css({"background-color":"#ffffff"});
      $('.imageLoad').attr('src',"img/load.svg");
      $(".sair").css("border-top","1px solid rgb(0,0,0,0.2)");
      $(".black-font").removeClass("text-color-white");
    }
  });

}

// JS para page Login
function pageLogin(){

  $(document).ready(function(){
    $("#entrar").on('click', function(e){
      e.preventDefault();
  
      // var rede = navigator.connection.type;
  
      // var tipo = {};
      // tipo[Connection.UNKNOWN]  = 'Conexão desconhecida';
      // tipo[Connection.ETHERNET] = 'Conexão por cabo';
      // tipo[Connection.WIFI]     = 'Conexão WIFI';
      // tipo[Connection.CELL_2G]  = 'Conexão 2G';
      // tipo[Connection.CELL_3G]  = 'Conexão 3G';
      // tipo[Connection.CELL_4G]  = 'Conexão 4G';
      // tipo[Connection.CELL]     = 'Rede de celular';
      // tipo[Connection.NONE]     = 'Nenhuma conexão';
  
      // if(tipo[rede] == "Nenhuma conexão"){
      //   app.dialog.alert("Verifique sua conexão com a internet","AVISO");
      // }else{
        var email = $("#email").val();
        var senha = $("#senha").val();
  
        if(email.trim() == "" || senha.trim() == ""){
          app.dialog.alert("Os campos usuário e senha são obrigatórios","AVISO");
          return false
        }

        app.dialog.preloader('Verificando informações');
  
        // Requisição AJAX
        app.request({
          // url:"php/login.php",
          url:"https://www.limeiraweb.com.br/mateus/php/login_instagram.php",
          type:"POST",
          dataType:"json",
          data:$("#Formlogin").serialize(),
          success:function(data){

            if(data.resultado != 0){

              app.dialog.preloader('Entrando...');
              setTimeout(function () {
                app.dialog.close();
                app.dialog.alert('<span class="text-align-center">Aproveite nossa rede social para compartilhar suas melhores fotos, '+ 
                'interaja com seus amigos e você também pode aproveitar para conhecer pessoas novas. '+ 
                'Caso você tenha um negócio, aproveite e deixe seu perfil profissional, habilitando novos recursos para empresas</span><br>'+
                '<a href="/perfilProfissional/" class="text-align-center" onclick="fecharAlertPerfilProfissional();">Conheça o perfil profissional</a>','<h3 class="text-align-center">Bem Vindo <br>'+data.nome+'</h3>');

                localStorage.setItem('id_usuario',data.id_usuario);
                localStorage.setItem('usuario',data.nome);
                localStorage.setItem('email_instagram',data.email);
  
                mainView.router.navigate({name:'home'});
              }, 3000);
              
            }else{
              app.dialog.alert("Usuário ou senha incorretos","AVISO");
              setTimeout(function () {
                app.dialog.close();
              }, 3000);
            }
  
            fechaAlert()
          },
          error:function(e){
  
          }
        });
      // }
  
    });

    $(".icon-hidden").on('click',function(){
      $(".login .icon-hidden").css('display','none');
      $(".login .icon-visi").css('display','block');
      document.getElementById('senha').type = 'text';
    }); 
    $(".icon-visi").on('click',function(){
      $(".login .icon-hidden").css('display','block');
      $(".login .icon-visi").css('display','none');
      document.getElementById('senha').type = 'password';
    }); 
    escuroON();
  });

}

function pageCadastro(){
  $(document).ready(function(){

    $("#celular").mask("(00) 0000-0000");

    $("#cadastrar").on('click',function(e){
      e.preventDefault();
  
      var nome_c = $("#nome_c").val();
      var email_c = $("#email_c").val();
      var senha_c = $("#senha_c").val();
      var celular_c = $("#celular").val();
  
      if(nome_c.trim() == ""){
        app.dialog.alert("Verifique a informação digitada no campo nome","");
        return false;
      }
      if(email_c.trim() == ""){
        app.dialog.alert("Verifique a informação digitada no campo email","");
        return false;
      }
      if(celular_c.trim() == ""){
        app.dialog.alert("Verifique a informação digitada no campo celular","");
        return false;
      }
      if(senha_c.trim() == ""){
        app.dialog.alert("Verifique a informação digitada no campo senha","");
        return false;
      }
  
      app.dialog.preloader('Aguarde...');
      // INSERT
      //app.request.post('php/insert_login.php',{
      app.request.post('https://www.limeiraweb.com.br/mateus/php/insert_login_instagram.php',{
        nome:nome_c,
        email:email_c,
        senha:senha_c,
        celular:celular_c,
      },
      function(data){

        setTimeout(function () {
          app.dialog.close();
          if(data == "existeAmbos"){
            app.dialog.alert("Email e usuário já estão em uso","");
          }else if(data == "existeUser"){
            app.dialog.alert("Este usuário já existe","");
          }else if(data == "existe"){
            app.dialog.alert("Este email já está em uso","");
          }else{
            app.dialog.alert("Cadastro realizado com sucesso","");
            $("#nome_c,#email_c,#senha_c,#celular").val("");
            mainView.router.navigate({name:'login'});
          }
        }, 3000);
  
        fechaAlert()
      });
    });
    $(".icon-hidden").on('click',function(){
      $(".login .icon-hidden").css('display','none');
      $(".login .icon-visi").css('display','block');
      document.getElementById('senha_c').type = 'text';
    }); 
    $(".icon-visi").on('click',function(){
      $(".login .icon-hidden").css('display','block');
      $(".login .icon-visi").css('display','none');
      document.getElementById('senha_c').type = 'password';
    }); 
    escuroON();
  });
}

function fecharAlertPerfilProfissional(){
  app.dialog.close();
}

// Gerar um nome aleátorio para a foto
function nomeFoto(){
  var nomeFoto = "IMG-";
  for(var i = 0; i < 20; i++){
    var numeroR = Math.floor(Math.random() * 20);
    nomeFoto += numeroR;
  }
  localStorage.setItem('nomeFoto',nomeFoto+'.jpg');
}

function nomeFoto_perfil(){
  var nomeFoto = "IMG-";
  for(var i = 0; i < 20; i++){
    var numeroR = Math.floor(Math.random() * 20);
    nomeFoto += numeroR;
  }
  localStorage.setItem('nomeFoto_perfil',nomeFoto+'.jpg');
}

function closePreLoader(){
  setTimeout(function () {
    $('.preload').addClass('completo'); 
  }, 300);
}

function publicacoes(){

    $(document).ready(function(){

      var idP = localStorage.getItem('id_public');
      var idUsuario = localStorage.getItem('id_usuario');

      online();

      perfilUsuario();
      
        var dados = "";
        app.request({
          // url:"php/publicacao.php",
          url:"https://www.limeiraweb.com.br/mateus/php/publicacao_instagram.php",
          type:"POST",
          dataType:"json",
          data: {id_usuario:idUsuario},
          success:function(resultado){

            closePreLoader();
            // console.log(resultado[0].prato);
            for(var i=0; i<resultado.length; i++){
      
              dados+='<div class="card demo-facebook-card">';
                dados+='<div class="display-flex justify-content-space-between">';
                  dados+='<div class="card-header">';
                    dados+='<div class="demo-facebook-avatar"><img src="https://www.limeiraweb.com.br/mateus/php/uploads/'+resultado[i].imagePerfil+'" width="100%"/></div>';
                    idUser = resultado[i].fk_id_usuario;
                    if(resultado[i].tipoPerfil == "profissional" && resultado[i].tipoPublicacao == "anuncio"){
                      dados+='<div class="demo-facebook-name bg-black"><a href="/perfil2/" onclick=setIDP("'+idUser+'")>'+resultado[i].nome+'</a>&nbsp;<img src="img/diamond.png" class="imgDiamond2" /> - Anúncio patrocinado</div>';
                    }else if(resultado[i].tipoPerfil == "adm" && resultado[i].tipoPublicacao == "anuncio"){
                      dados+='<div class="demo-facebook-name bg-black"><a href="/perfil2/" onclick=setIDP("'+idUser+'")>'+resultado[i].nome+'</a>&nbsp;<img src="img/tuxedo.png" class="imgDiamond2" /> - Anúncio patrocinado</div>';
                    }else if(resultado[i].tipoPerfil == "profissional"){
                      dados+='<div class="demo-facebook-name bg-black"><a href="/perfil2/" onclick=setIDP("'+idUser+'")>'+resultado[i].nome+'</a>&nbsp;<img src="img/diamond.png" class="imgDiamond2" /></div>';
                    }else if(resultado[i].tipoPerfil == "adm"){
                      dados+='<div class="demo-facebook-name bg-black"><a href="/perfil2/" onclick=setIDP("'+idUser+'")>'+resultado[i].nome+'</a>&nbsp;<img src="img/tuxedo.png" class="imgDiamond2" /></div>';
                    }else{
                      dados+='<div class="demo-facebook-name bg-black"><a href="/perfil2/" onclick=setIDP("'+idUser+'")>'+resultado[i].nome+'</a></div>';
                    }
                    dados+='<div class="demo-facebook-date">'+resultado[i].dataFormat+'</div>';
                  dados+='</div>';

                  $(".back-legenda").on("click", function(){
                    localStorage.removeItem('id_public');
                    $(".verLegenda").removeClass("display-none");
                    $(".div-list").addClass("display-none");
                    $(".navbar-index").removeClass("display-none");
                    $(".navbar-legenda").addClass("display-none");
                  });

                    if(idUsuario == resultado[i].fk_id_usuario){
                      id2 = resultado[i].id_publicInsta;
                      dados+='<div class="bg-black margin-top margin-right">';
                        dados+='<a class="link popover-open" href="#" data-popover=".popover-links" onclick=setPublic("'+id2+'");><i class="f7-icons">ellipsis_vertical</i></a>';
                      dados+='</div>';
                      dados+='<div class="popover popover-links">';
                        dados+='<div class="popover-inner">';
                          dados+='<div class="list">';
                            dados+='<ul>';
                              dados+='<li><a class="list-button item-link text-align-center" href="#" id="excluir" onclick=excluir();>Excluir</a></li>';
                              dados+='<li><a class="list-button item-link text-align-center" href="#" id="editarLegenda" onclick=editarLegenda();>Editar legenda</a></li>';
                            dados+='</ul>';
                          dados+='</div>';
                        dados+='</div>';
                      dados+='</div>';
                    }

                dados+='</div>';
      
                id = resultado[i].id_publicInsta;
      
                dados+='<div class="width-img">';
                  dados+='<img src="https://www.limeiraweb.com.br/mateus/php/uploads/'+resultado[i].imagem+'" width="100%"/>';
                dados+='</div>';
                  
                dados+='<p class="likes margin-left clicouL bg-black"><i class="f7-icons like heart btn-curtida text-color-red" id="btn-curtida" onclick=curtida("'+id+'");>heart_fill</i> &nbsp;&nbsp; <a href="/comentarios/" onclick=setPublic("'+id+'"); class="btn-comentario"><i class="f7-icons comentario">chat_bubble</i></a></p>';             
  
                  if(resultado[i].curtida == 1){
                    dados+='<div class="likeUser margin-left">';
                    dados+='Curtido por <strong class="black red"><a href="/perfil/">'+resultado[i].usuario_like+'</a></strong>';
                    dados+=' e <strong class="black red"><a href="/curtidas/" onclick=setPublic("'+id+'");>outras pessoas</a></strong>';
                    dados+='</div>';  
                  }else{
                    dados+= '';
                  } 
                  
                  if(resultado[i].descricao !=""){
                    dados+='<div class="margin-left margin-right verLegenda"><strong class="black red"><a href="#" class="tab-link">'+resultado[i].nome+'</a></strong> '+resultado[i].descricao+'</div>';
                  }else{
                    dados+='';
                  }

                  if(idP == resultado[i].id_publicInsta){
                    dados+='<div class="div-list display-none">';
                      dados+='<div class="list inline-labels no-hairlines-md">';
                        dados+='<ul>';
                          dados+='<li class="item-content item-input">';
                            dados+='<div class="item-inner">';
                              dados+='<strong class="black red"><a href="#" class="tab-link">'+resultado[i].nome+'</a></strong>&nbsp;';
                              dados+='<div class="item-input-wrap">';
                                dados+='<textarea id="valuelegenda" cols="24" rows="10" placeholder="Escreva sua legenda">'+resultado[i].descricao+'</textarea>';
                              dados+='</div>';
                            dados+='</div>';
                          dados+='</li>';
                        dados+='</ul>';
                      dados+='</div>';
                    dados+='</div>';
                  }
                 
                  dados+='</p>';
                  dados+='<p class="margin-left"></p>';
      
                    if(resultado[i].quantidade != 0){
                      dados+='<p class="margin-left"><span class="bg-black"><a href="/comentarios/" class="btn-comentario comment" onclick=setPublic("'+id+'");>Ver todos os '+resultado[i].quantidade+' comentários</a></span></p>';
                    }else{
                      dados+='';
                    }
  
                  dados+='</div>';
      
            }
            $("#publicacoes").html(dados);
      
            escuroON();
            
          },
          error:function(e){
      
          }
        });
      escuroON();
    });

}

$(document).ready(function(){
  if(cod_usuario){
    publicacoes();
  }else{
    mainView.router.navigate({name:'login'});
    pageLogin();
  }
});

function publicacaoUser(){

  $(document).ready(function(){

    online();
  var v_publicacao = localStorage.getItem('id_public');
  var idUsuario = localStorage.getItem('id_usuario');
  var dados = "";

    app.request.post("https://www.limeiraweb.com.br/mateus/php/publicacaoUser.php",{
      id_public:v_publicacao,
    },function(resposta){
      resultado = (resposta).split('|');

      closePreLoader();

        dados+='<div class="card demo-facebook-card">';
          dados+='<div class="display-flex justify-content-space-between">';
            dados+='<div class="card-header">';
              dados+='<div class="demo-facebook-avatar"><img src="https://www.limeiraweb.com.br/mateus/php/uploads/'+resultado[5]+'" width="100%"/></div>';
              idUser = resultado[4];
              if(resultado[11] == "profissional"){
                dados+='<div class="demo-facebook-name bg-black"><a href="/perfil/" class="nameP" onclick=setIDP("'+idUser+'")>'+resultado[0]+'</a>&nbsp;<img src="img/diamond.png" class="imgDiamond2" /></div>';
              }else{
                dados+='<div class="demo-facebook-name bg-black"><a href="/perfil/" class="nameP" onclick=setIDP("'+idUser+'")>'+resultado[0]+'</a></div>';
              }
              dados+='<div class="demo-facebook-date">'+resultado[6]+'</div>';
            dados+='</div>';

            $(".back-legenda").on("click", function(){
              $(".verLegenda").removeClass("display-none");
              $(".div-list").addClass("display-none");
              $(".navbar-index").removeClass("display-none");
              $(".navbar-legenda").addClass("display-none");
            });

            if(idUsuario == resultado[4]){
              id2 = resultado[7];
              dados+='<div class="bg-black margin-top margin-right">';
                dados+='<a class="link popover-open" href="#" data-popover=".popover-links" onclick=setPublic("'+id2+'");><i class="f7-icons">ellipsis_vertical</i></a>';
              dados+='</div>';
              dados+='<div class="popover popover-links">';
                dados+='<div class="popover-inner">';
                  dados+='<div class="list">';
                    dados+='<ul>';
                      dados+='<li><a class="list-button item-link text-align-center" href="#" id="excluir" onclick=excluir2();>Excluir</a></li>';
                      dados+='<li><a class="list-button item-link text-align-center" href="#" id="editarLegenda" onclick=editarLegenda();>Editar legenda</a></li>';
                    dados+='</ul>';
                  dados+='</div>';
                dados+='</div>';
              dados+='</div>';
            }

          dados+='</div>';

          id = resultado[7];

          dados+='<div class="width-img">'; 
            dados+='<img src="https://www.limeiraweb.com.br/mateus/php/uploads/'+resultado[2]+'" width="100%"/>';
            dados+='<div id="heart">';
              dados+='<img class="bottom display-none" src="img/heart.png" width="100px">';
            dados+='</div>';
          dados+='</div>';

          dados+='<p class="likes margin-left clicouL bg-black"><i class="f7-icons like heart btn-curtida text-color-red" id="btn-curtida" onclick=curtida("'+id+'");>heart_fill</i> &nbsp;&nbsp; <a href="/comentarios/" onclick=setPublic("'+id+'"); class="btn-comentario"><i class="f7-icons comentario">chat_bubble</i></a></p>';
          
          if(resultado[10] == 1){
            dados+='<div class="likeUser margin-left">';
            dados+='Curtido por <strong class="black red"><a href="/perfil/">'+resultado[9]+'</a></strong>';
            dados+=' e <strong class="black red"><a href="/curtidas/" onclick=setPublic("'+id+'");>outras pessoas</a></strong>';
            dados+='</div>';  
          }else{
            dados+= '';
          } 

            if(resultado[3] !=""){
              dados+='<div class="margin-left margin-right verLegenda"><strong class="black red"><a href="#" class="tab-link">'+resultado[0]+'</a></strong> '+resultado[3]+'</div>';
            }else{
              dados+='';
            }

            dados+='<div class="div-list display-none">';
              dados+='<div class="list inline-labels no-hairlines-md">';
                dados+='<ul>';
                  dados+='<li class="item-content item-input">';
                    dados+='<div class="item-inner">';
                      dados+='<strong class="black red"><a href="#" class="tab-link">'+resultado[0]+'</a></strong>&nbsp;';
                      dados+='<div class="item-input-wrap">';
                        dados+='<textarea id="valuelegenda" cols="24" rows="10" placeholder="Escreva sua legenda">'+resultado[3]+'</textarea>';
                      dados+='</div>';
                    dados+='</div>';
                  dados+='</li>';
                dados+='</ul>';
              dados+='</div>';
            dados+='</div>';
           
            dados+='</p>';
            dados+='<p class="margin-left"></p>';

              if(resultado[1] != 0){
                dados+='<p class="margin-left"><span class="bg-black"><a href="/comentarios/" class="btn-comentario comment" onclick=setPublic("'+id+'");>Ver todos os '+resultado[1]+' comentários</a></span></p>';
              }else{
                dados+='';
              }
            
            dados+='</div>';

      $("#publicUser").html(dados);
      escuroON();

    })

    $(".back-public").on("click", function(){
      // pagePerfil();
      localStorage.removeItem('id_public');
    });
  });  
  escuroON();
}

function setIDP(idUser){
  localStorage.setItem("id_perfil",idUser);
}

// function setPublic2(id2){
//   localStorage.getItem('id_publicInsta',id2);
// }

// Função excluir publicações 
function excluir(){

  $(document).ready(function(){
    var idPUEXL = localStorage.getItem('id_public');

    app.dialog.confirm("Deseja remover essa publicação?","",function(){
      app.dialog.preloader('Excluindo...');
      app.request.post("https://www.limeiraweb.com.br/mateus/php/excluir_instagram.php",{
        id_public:idPUEXL,
      },function(resposta){
        setTimeout(function () {
          app.dialog.close();
          if(resposta == "Sucesso"){
            localStorage.removeItem('excluir');
            publicacoes();
          }
        }, 1000);
      })
    });
  });

}

function excluir2(){

  $(document).ready(function(){
    var idPUEXL = localStorage.getItem('id_public');

    app.dialog.confirm("Deseja remover essa publicação?","",function(){
      app.dialog.preloader('Excluindo...');
      app.request.post("https://www.limeiraweb.com.br/mateus/php/excluir_instagram.php",{
        id_public:idPUEXL,
      },function(resposta){
        setTimeout(function () {
          app.dialog.close();
          if(resposta == "Sucesso"){
            localStorage.removeItem("id_public");
            app.views.current.router.back();
            publicacaoUser();
          }
        }, 1000);
      })
    });
  });

}

function confirmLegenda(){

  $(document).ready(function(){

    var v_public2 = localStorage.getItem('id_public');

    app.dialog.preloader('Alterando...');
    $(".verLegenda").removeClass("display-none");
    $(".div-list").addClass("display-none");
    $(".navbar-index").removeClass("display-none");
    $(".navbar-legenda").addClass("display-none");
  
    var editarL = $("#valuelegenda").val();
  
    app.request.post("https://www.limeiraweb.com.br/mateus/php/editar_legenda_instagram.php",{
      valuelegenda:editarL,
      id_public:v_public2,
    },function(resposta){
      setTimeout(function () {
        app.dialog.close();
        if(resposta == "Sucesso"){
          publicacoes();
          publicacaoUser();
        }
      }, 1000);
    })

  });

}

// Função excluir publicações 
function editarLegenda(){
  $(document).ready(function(){
    localStorage.getItem('id_public');
    $(".div-list").removeClass("display-none");
    $(".verLegenda").addClass("display-none");
    $(".navbar-index").addClass("display-none");
    $(".navbar-legenda").removeClass("display-none");
  });
}

function pesquisa_perfil(){

  $(document).ready(function(){

    online();
    perfilUsuario();

  app.request.post('https://www.limeiraweb.com.br/mateus/php/pesquisa_perfil.php', {}, function(resposta){
      $("#verPerfil3").html(resposta);  

      closePreLoader();

      $(document).on("click", ".pesquisaPerfil", function(){
        var id = $(this).attr('data');
        localStorage.setItem('id_perfil', id); 
      });

      $(document).ready(function(){
        // Inicializar o pesquisar
        var searchbar = app.searchbar.create({
          el: '.searchbar',
          searchContainer: '.list',
          searchIn: '.item-title',
        }); // Fim searchbar
      }); // FIM READY
      escuroON();

  });
  escuroON();
});
}

function insertSeguidores(){
  $(".seguirP").on("click", function(){
    // var id = $(this).attr('data'); 
    localStorage.getItem('id_perfil', id); // armazena o ID no ambiente local

    var v_id = localStorage.getItem('id_usuario');
    var v_perfil = localStorage.getItem('id_perfil');
    // app.dialog.alert(v_perfil);

    app.request.post('https://www.limeiraweb.com.br/mateus/php/insert_seguidores.php',{
    id_usuario:v_id,
    id_perfil:v_perfil,
    },
    function(resposta){

      // app.dialog.alert("Você está seguindo");
      // localStorage.removeItem('id_perfil',id);

      if(resposta !="Existe"){
        $(".seguirP").hide();
        $(".seguindo").show();
      }else{
        $(".seguirP").show();
        $(".seguindo").hide();
      }

    });
  });
}

function verLikes(){

  $(document).ready(function(){

    online();
    var v_public = localStorage.getItem('id_public');
    // alert(v_public);
  
    app.request.post('https://www.limeiraweb.com.br/mateus/php/verLikes.php', {id_public:v_public}, function(resposta){
      dados = (resposta).split('|');  // Divide a string baseada em um caracter
        $("#curtidas").html(dados[0]); 
        $("#likesTotal").html(dados[1]);  

        closePreLoader();
  
        $(document).ready(function(){
          // Inicializar o pesquisar
          var searchbar = app.searchbar.create({
            el: '.searchbar',
            searchContainer: '.list',
            searchIn: '.item-title',
          }); // Fim searchbar
        }); // FIM READY

        $(document).on("click", ".item-inner", function(){
          var id = $(this).attr('data'); // recupera o ID
          // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
          localStorage.setItem('id_perfil', id); // armazena o ID no ambiente local
        });
  
        escuroON();
  
    });
  
    $(".back-like").on("click", function(){
      publicacoes();
    });
    escuroON();
  });

}

function curtida(id){

  localStorage.setItem("id_public",id);
  var v_user = localStorage.getItem('id_usuario');
  var v_public = localStorage.getItem('id_public');
  var v_userInsta = localStorage.getItem('usuario');

  $(".btn-curtida").addClass("bottom");

  setTimeout(function () {
    $(".btn-curtida").removeClass("bottom");
  }, 2000);

//  alert(v_user+" | "+v_public);

  app.request.post('https://www.limeiraweb.com.br/mateus/php/curtida.php', {id_usuario:v_user,id_public:v_public,user_insta:v_userInsta}, function(resposta){
    localStorage.removeItem('id_public',id);
    
    publicacoes();

  });

}

function setPublic(id){
  localStorage.setItem("id_public",id);
  publicacoes();
}

function insertComentario(){
  var v_public = localStorage.getItem('id_public');
  var v_user = localStorage.getItem('id_usuario');
  
  $(".send-link").on("click", function(){

    app.dialog.preloader('Publicando...');

    var vComentario = $("#comentario").val();

    if(vComentario.trim() == ""){
      app.dialog.alert("O campo comentário não pode ficar vazio","AVISO");
      return false;
    }

    app.request.post('https://www.limeiraweb.com.br/mateus/php/comentario.php', {id_usuario:v_user,id_public:v_public,comentario:vComentario}, function(resposta){

      setTimeout(function () {
        app.dialog.close();
        $("#comentario").val("");
        comentario();
      }, 500);

    });

  });
}

function comentario(){

  $(document).ready(function(){
    online();
    var v_public = localStorage.getItem('id_public');
    var v_id = localStorage.getItem('id_usuario');

    app.request.post('https://www.limeiraweb.com.br/mateus/php/verComentario.php', {id_public:v_public,id_usuario:v_id}, function(resposta){
      $("#verComentario").html(resposta);  
      closePreLoader();

      $(document).on("click", ".verComent", function(){
        var id = $(this).attr('data'); // recupera o ID
        // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
        localStorage.setItem('id_perfil', id); // armazena o ID no ambiente local
      });

      $(document).on("click", ".setIdComentario", function(){
        var id_comentario = $(this).attr('data-comentario'); // recupera o ID
        localStorage.setItem('comentario', id_comentario); // armazena o ID no ambiente local
      });

      $(document).on("click", ".fkUser", function(){
        var fkUser = $(this).attr('data-fkuser'); 
        localStorage.setItem('fk_id_usuario', fkUser);
      });

      $(".setIdComentario").on("click", function(){
        $(document).ready(function(){
          var v_fkUser = localStorage.getItem('fk_id_usuario');
          if(cod_usuario == v_fkUser){
            $(".navbar-comentario").addClass("display-none");
            $(".navbar-conf-comentario").removeClass("display-none");
          }else{
            $(".navbar-comentario").removeClass("display-none");
            $(".navbar-conf-comentario").addClass("display-none");
          }
        });
      });

      $("#editar-comentario").on("click", function(){

        var v_comentario = localStorage.getItem('comentario');
        var v_id2 = localStorage.getItem('id_usuario');

        $(".navbar-comentario").addClass("display-none");
        $(".navbar-conf-comentario").addClass("display-none");
        $(".navbar-edit-comentario").removeClass("display-none");
        $(".public-coment").addClass("display-none");

        app.request.post("https://www.limeiraweb.com.br/mateus/php/recuperarComentario.php",{
          id_comentario:v_comentario,
          id_usuario:v_id2,
        },function(resposta){

          $("#comentario").val(resposta);

        })

      });

      $(".back-edit-coment").on("click", function(){
        $(".navbar-comentario").removeClass("display-none");
        $(".navbar-conf-comentario").addClass("display-none");
        $(".navbar-edit-comentario").addClass("display-none");
        $(".public-coment").removeClass("display-none");
        $("#comentario").val("");
        localStorage.removeItem('fk_id_usuario');
        localStorage.removeItem('comentario');
      });

      escuroON();
    });
    
    $(".back-coment").on("click", function(){
      publicacoes();
    });

    escuroON();

    // setTimeout(function(){
    //   comentario();
    // },1000);

  });

}

function editarComentario(){

  app.dialog.preloader('Alterando...');

  var vComentario = $("#comentario").val();
  var v_comentario = localStorage.getItem('comentario');
  var v_id2 = localStorage.getItem('id_usuario');

  app.request.post("https://www.limeiraweb.com.br/mateus/php/editar_comentario_instagram.php",{
    id_comentario:v_comentario,
    id_usuario:v_id2,
    comentario:vComentario
  },function(resposta){

    setTimeout(function () {
      app.dialog.close();
      if(resposta == "Sucesso"){
        localStorage.removeItem('comentario');
        localStorage.removeItem('fk_id_usuario');
        $(".navbar-edit-comentario").addClass("display-none");
        $(".navbar-comentario").removeClass("display-none");
        $(".public-coment").removeClass("display-none");
        $("#comentario").val("");
      }
    }, 500);

  });

}

function excluirComentario(){

  var v_comentario = localStorage.getItem('comentario');
  var v_id2 = localStorage.getItem('id_usuario');
  app.dialog.confirm("Deseja remover esse comentário?","AVISO",function(){
    app.dialog.preloader('Excluindo...');
    app.request.post("https://www.limeiraweb.com.br/mateus/php/excluir_comentario.php",{
      id_comentario:v_comentario,
      id_usuario:v_id2,
    },function(resposta){

      setTimeout(function () {
        app.dialog.close(); 
        if(resposta == "Sucesso"){
          localStorage.removeItem('comentario');
          localStorage.removeItem('fk_id_usuario');
          $(".navbar-conf-comentario").addClass("display-none");
          $(".navbar-comentario").removeClass("display-none");
        }
      }, 500);

    })
  });

}

// Publicações no servidor online
function pagePublicar(){
  $(document).ready(function(){
    online();
    perfilUsuario();
    localStorage.removeItem('foto');
    localStorage.removeItem('nomeFoto');

    $('#foto').on('click',cameraApp);

      function cameraApp(){
          navigator.camera.getPicture(onSuccess, onFail,{
              quality:100,
              destinationType:Camera.DestinationType.FILE_URI,
              saveToPhotoAlbum:true,  // bolean
              sourceType:Camera.PictureSourceType.CAMERA,
              mediaType:Camera.MediaType.PICTURE,	
              encodingType:Camera.EncodingType.JPEG,
              targetWidth:1080,
              targetHeight:1080,
              allowEdit:true,
          });
      }
      
      function onSuccess(foto) {
          $('#imagem').attr('src',foto);
          localStorage.setItem('foto',foto);
          nomeFoto();
      }
      
      function onFail(message) {
          alert('Erro ao capturar a imagem: ' + message);
      }

      $('#galeria').on('click',galeria);
  
      function galeria(){
          navigator.camera.getPicture(onSuccess, onFail,{
              quality:100,
              destinationType:Camera.DestinationType.FILE_URI,
              sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
              mediaType:Camera.MediaType.PICTURE,	
              targetWidth:1080,
              targetHeight:1080,
              allowEdit:true,
          });
      }
      
      function onSuccess(foto) {
          $('#imagem').attr('src',foto);
          localStorage.setItem('foto',foto);
          nomeFoto();
      }
      
      function onFail(message) {
          alert('Erro ao capturar a imagem: ' + message);
      }

      escuroON();

  });

  $("#publicar").on("click",function(){
    var legenda = $("#legenda").val();
    var fotoPublic = localStorage.getItem('foto');
    var nomeFoto = localStorage.getItem('nomeFoto');

    var id_usuario = localStorage.getItem('id_usuario');

    if(!fotoPublic){
      app.dialog.alert("A publicação precisa de uma imagem","");
      return false;
    }

    app.dialog.preloader('Publicando...');

    // Gravando no servidor online
    var options = new FileUploadOptions();

    options.fileKey = "file";
    options.fileName = nomeFoto;
    options.mimeType = "image/jpeg";

    var params = new Object();
    params.value1 = legenda;
    params.value2 = id_usuario;

    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();
    ft.upload(fotoPublic,encodeURI("https://www.limeiraweb.com.br/mateus/php/insert_public.php"),function(){

      setTimeout(function () {
        app.dialog.alert("Publicação realizada com sucesso!!","");
        app.dialog.close();
        fotoPublic = localStorage.removeItem('foto');
        nomeFoto = localStorage.removeItem('nomeFoto');
        mainView.router.navigate({name:'home'});
        publicacoes();
      }, 3000);

    },function(){

    },options);

  });
  escuroON();

}

function pagePerfil(){

  $(document).ready(function(){
    $(".painel-adm").hide();
    online();
    perfilUsuario();
    app.request.post('https://www.limeiraweb.com.br/mateus/php/usuarios_cadastrador.php',{},
    function(resposta){
      $("#usuarios_cadastrados").html(resposta);
    });

    var v_perfil = localStorage.getItem('id_perfil');
    var v_id = localStorage.getItem('id_usuario');
  
    app.request.post('https://www.limeiraweb.com.br/mateus/php/verPerfil_projeto.php',{
      id_usuario:v_id,
      },
      function(resposta){
        dados = (resposta).split('|');
        $("#verPerfil").html(dados[0]);
        $("#verPublic").html(dados[1]);
        $("#numberSeguidores").html(dados[2]); 
        $("#quantidadePublic").html(dados[3]);

        closePreLoader();
  
      $(".seguirP").hide();
      $(".seguindo").hide();
  
      $(document).on("click", ".setPublic", function(){
        var id = $(this).attr('data'); // recupera o ID
        // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
        localStorage.setItem('id_public', id); // armazena o ID no ambiente local
      });
      escuroON();

      if(v_id == "1"){
        $(".info-perfil,#avaliacao,.atividade-perfil,.anuncio").show();
        $(".perfilPRO").hide();
        $(".imgTuxedo").show();
        $(".imgDiamond").hide();
      }else if(dados[4]!=""){
        $(".info-perfil,#avaliacao,.atividade-perfil,.anuncio").show();
        $(".perfilPRO").hide();
        $(".imgDiamond").show();
        $(".imgTuxedo").hide();
      }else{
        $(".info-perfil,#avaliacao,.atividade-perfil,.anuncio").hide();
        $(".perfilPRO").show();
        $(".imgDiamond").hide();
        $(".imgTuxedo").hide();
      }

      $(".link-site").on("click", function(){
        window.open('https://www.'+dados[5]+'', '_blank');
      });

      if(dados[5] == "" || dados[6] == "" || dados[7] == "" || dados[8] == "" || dados[9] == ""){
        $(".endereco,.site,.telefone").hide();
      }

      if(v_id == dados[10]){
        $(".painel-adm").show();
      }else{
        $(".painel-adm").hide();
      }
  
    });
  
    escuroON();

    
      $(".logout").on("click",function(){

        app.dialog.confirm("Deseja realmente sair?","",function(){

        app.dialog.preloader('Saindo...');
  
        setTimeout(function () {
          app.dialog.close();
          mainView.router.navigate({name:'login'});
          app.panel.close(".panel-right");
          // location.reload();
          localStorage.removeItem('id_usuario');
          localStorage.removeItem('usuario');
          localStorage.removeItem('email_instagram');
          localStorage.removeItem('id_perfil');
        }, 2000);
  
      });

    });

    $(".perfilPRO").on("click",function(){
      app.panel.close(".panel-right");
    });

    $(".sobre").on("click",function(){
      app.panel.close(".panel-right");
    });

  });

}

function perfilUsuario(){
  $(document).ready(function(){
    var v_id = localStorage.getItem("id_usuario");
    $(".perfilUsuario").on("click", function(){
      localStorage.setItem("id_perfil",v_id);
    });
  });
}

function pagePerfil2(){

  $(document).ready(function(){
    online();
    perfilUsuario();
  var v_perfil = localStorage.getItem('id_perfil');
  var v_id = localStorage.getItem('id_usuario');

  app.request.post('https://www.limeiraweb.com.br/mateus/php/verPerfil_projeto2.php',{
    id_perfil:v_perfil,
    id_usuario:v_id,
    },
    function(resposta){
      dados = (resposta).split('|');
      $("#verPerfil2").html(dados[0]);
      $("#verPublic2").html(dados[1]);
      $("#numberSeguidores2").html(dados[2]); 
      $("#quantidadePublic2").html(dados[3]);
      $("#teste").html(dados[4]);
      closePreLoader();

    $(document).on("click", ".setPublic", function(){
      var id = $(this).attr('data'); // recupera o ID
      // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
      localStorage.setItem('id_public', id); // armazena o ID no ambiente local
    });

    insertSeguidores();

    $(".seguirP").on("click", function(){
      pagePerfil2();
    });

    if(v_id != v_perfil){
      inserirVisitantes();
    }

    if(v_perfil == "1" && v_id == "1"){
      $(".info-perfil,#avaliacao,.atividade-perfil").show();
      $("#editarPeril").show();
      $(".seguirP").hide();
      $(".seguindo").hide();
      $(".mensagem").hide();
      $(".imgTuxedo").show();
      $(".imgDiamond").hide();
      $(".orcamento").hide();
    }else if(v_perfil == "1" && v_id != "1" && dados[4] !="" && dados[5] !=""){
      $(".info-perfil,#avaliacao").show();
      $("#editarPeril,.atividade-perfil").hide();
      $(".seguirP").hide();
      $(".seguindo").show();
      $(".mensagem").show();
      $(".imgTuxedo").show();
      $(".imgDiamond").hide();
      $(".orcamento").show();
    }else if(v_perfil == "1" && v_id != "1"){
      $(".info-perfil,#avaliacao").show();
      $("#editarPeril,.atividade-perfil").hide();
      $(".seguirP").show();
      $(".seguindo").hide();
      $(".mensagem").show();
      $(".imgTuxedo").show();
      $(".imgDiamond").hide();
      $(".orcamento").show();
    }else if(dados[4] !="" && dados[5] !="" && dados[6] !=""){
      $("#editarPeril").hide();
      $(".seguirP").hide();
      $(".seguindo").show();
      $(".mensagem").show();
      $(".info-perfil,#avaliacao,.orcamento").show();
      $(".atividade-perfil").hide();
      $(".imgDiamond").show();
      $(".imgTuxedo").hide();
    }else if(dados[4] !="" && dados[5]){
      $("#editarPeril").hide();
      $(".seguirP").hide();
      $(".seguindo").show();
      $(".mensagem").show();
      $(".info-perfil,#avaliacao,.orcamento").hide();
      $(".atividade-perfil").hide();
      $(".imgDiamond").hide();
      $(".imgTuxedo").hide();
    }else if(v_id == v_perfil && dados[6] !=""){
      $("#editarPeril").show();
      $(".seguirP").hide();
      $(".seguindo").hide();
      $(".mensagem").hide();
      $(".info-perfil,#avaliacao,.atividade-perfil").show();
      $(".imgDiamond").show();
      $(".imgTuxedo").hide();
      $(".orcamento").hide();
    }else if(v_id == v_perfil){
      $("#editarPeril").show();
      $(".seguirP").hide();
      $(".seguindo").hide();
      $(".mensagem").hide();
      $(".info-perfil,#avaliacao,.atividade-perfil,.orcamento").hide();
      $(".imgDiamond").hide();
      $(".imgTuxedo").hide();
    }else{
      $("#editarPeril").hide();
      $(".seguirP").show();
      $(".seguindo").hide();
      $(".mensagem").show();
      $(".info-perfil,#avaliacao,.atividade-perfil,.orcamento").hide();
      $(".imgDiamond").hide();
      $(".imgTuxedo").hide();
    }

    escuroON();

    $(".link-site").on("click", function(){
      window.open('https://www.'+dados[7]+'', '_blank');
    });

    if(dados[7] == "" || dados[8] == "" || dados[9] == "" || dados[10] == "" || dados[11] == ""){
      $(".endereco,.site,.telefone").hide();
    }

  });
  escuroON();
});
}

function verSeguidores(){
  var v_id2 = localStorage.getItem('id_usuario');
  app.request.post('https://www.limeiraweb.com.br/mateus/php/verSeguidores.php',{
      id_usuario:v_id2,
      },
      function(resposta){
        dados = (resposta).split("|");
        $(".followUser").html(dados[2]);
  });

  $("#seguidores").on("click", function(){
    $(".preload").removeClass("display-none");
    $(".button-noturno").css("z-index","300");
    var v_id = localStorage.getItem('id_usuario');

    app.request.post('https://www.limeiraweb.com.br/mateus/php/verSeguidores.php',{
      id_usuario:v_id,
      },
      function(resposta){
        dados = (resposta).split("|");
        $("#verSeguidores").html(dados[0]);
        $(document).on("click", ".item-inner", function(){
          var id = $(this).attr('data'); // recupera o ID
          // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
          localStorage.setItem('id_perfil', id); // armazena o ID no ambiente local
        });
        escuroON();
        closePreLoader();
  
    });
    escuroON();
  });

  $("#seguindo").on("click", function(){
    var v_perfil = localStorage.getItem('id_perfil');
    $(".preload").removeClass("display-none");
    $(".button-noturno").css("z-index","300");

    app.request.post('https://www.limeiraweb.com.br/mateus/php/verSeguidores2.php',{
      id_perfil:v_perfil,
      },
      function(resposta){
        dados = (resposta).split("|");
        $("#verSeguidores").html(dados[1]);
        $(document).on("click", ".item-inner", function(){
          var id = $(this).attr('data'); // recupera o ID
          // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
          localStorage.setItem('id_perfil', id); // armazena o ID no ambiente local
        });
        escuroON();
        closePreLoader();
    });
    escuroON();
  });
  escuroON();
}

function verSeguidores2(){

  var v_perfil = localStorage.getItem('id_perfil');
  app.request.post('https://www.limeiraweb.com.br/mateus/php/verSeguidores2.php',{
      id_perfil:v_perfil,
      },
      function(resposta){
        dados = (resposta).split("|");
        $(".followUser").html(dados[2]);
  });

  $("#seguidores2").on("click", function(){
    var v_perfil = localStorage.getItem('id_perfil');
    $(".preload").removeClass("display-none");
    $(".button-noturno").css("z-index","300");

    app.request.post('https://www.limeiraweb.com.br/mateus/php/verSeguidores2.php',{
      id_perfil:v_perfil,
      },
      function(resposta){
        dados = (resposta).split("|");
        $("#verSeguidores2").html(dados[0]);

        $(document).on("click", ".item-inner", function(){
          var id = $(this).attr('data'); // recupera o ID
          // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
          localStorage.setItem('id_perfil', id); // armazena o ID no ambiente local
        });
        escuroON();
        closePreLoader();
    });
    escuroON();
  });

  $("#seguindo2").on("click", function(){
    var v_perfil = localStorage.getItem('id_perfil');
    $(".preload").removeClass("display-none");
    $(".button-noturno").css("z-index","300");

    app.request.post('https://www.limeiraweb.com.br/mateus/php/verSeguidores2.php',{
      id_perfil:v_perfil,
      },
      function(resposta){
        dados = (resposta).split("|");
        $("#verSeguidores2").html(dados[1]);
        $(document).on("click", ".item-inner", function(){
          var id = $(this).attr('data'); // recupera o ID
          // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
          localStorage.setItem('id_perfil', id); // armazena o ID no ambiente local
        });
        escuroON();
        closePreLoader();
    });
    escuroON();
  });
  escuroON();
}

function pageUpdate(){
  online();

    // Faz os carregamentos dos dados para edição
    var v_id = localStorage.getItem('id_usuario');
    // app.dialog.alert("Formulario - Recuperei: " + v_id);
    app.request.post('https://www.limeiraweb.com.br/mateus/php/perfilUser.php', {id_usuario: v_id}, function(resposta){
      dados = (resposta).split('|');
      closePreLoader();
      $("#nome").val(dados[0]); 
      $("#user").val(dados[1]);  
      $("#email").val(dados[2]);
      $("#bio").val(dados[3]); 
      $('#imagemUser').attr('src',dados[4]);
      $("#nomeFoto").val(dados[5]);
      $("#celular_u").val(dados[6]);

      if(dados[13] == undefined || dados[13] == "" || dados[13] == null){
        $(".telefone,.rua,.bairro,.cidade,.site,.numero").hide();
      }else{
        $("#telefone_u").val(dados[7]);
        $("#rv").val(dados[8]);
        $("#bairro").val(dados[9]);
        $("#numero_casa").val(dados[10]);
        $("#cidade_autocomplete").val(dados[11]);
        $("#site").val(dados[12]);
      }

      escuroON();
    });  
    
    // Função do recurso de câmera
    $(document).ready(function(){

      $("#celular_u").mask("(00) 00000-0000");
      $("#telefone_u").mask("(00) 00000-0000");

      $('#fotoUser').on('click',cameraApp);
  
        function cameraApp(){
            navigator.camera.getPicture(onSuccess, onFail,{
                quality:100,
                destinationType:Camera.DestinationType.FILE_URI,
                saveToPhotoAlbum:true,  // bolean
                sourceType:Camera.PictureSourceType.CAMERA,
                mediaType:Camera.MediaType.PICTURE,	
                encodingType:Camera.EncodingType.JPEG,
                targetWidth:720,
                targetHeight:720,
                allowEdit:true,
            });
        }
        
        function onSuccess(foto) {
            $('#imagemUser').attr('src',foto);
            localStorage.setItem('foto_perfil',foto);
            nomeFoto_perfil()
        }
        
        function onFail(message) {
            alert('Erro ao capturar a imagem: ' + message);
        }
  
        $('#galeriaUser').on('click',galeria);
    
        function galeria(){
            navigator.camera.getPicture(onSuccess, onFail,{
                quality:100,
                destinationType:Camera.DestinationType.FILE_URI,
                sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
                mediaType:Camera.MediaType.PICTURE,	
                targetWidth:720,
                targetHeight:720,
                allowEdit:true,
            });
        }
        
        function onSuccess(foto) {
            $('#imagemUser').attr('src',foto);
            localStorage.setItem('foto_perfil',foto);
            nomeFoto_perfil()
        }
        
        function onFail(message) {
            alert('Erro ao capturar a imagem: ' + message);
        }
        escuroON();

              // Função para fazer o UPDATE
    $("#btn-confirm").on("click",function(){
      var v_id = localStorage.getItem('id_usuario');

      var nome_c = $("#nome").val();
      var user = $("#user").val();
      var email_c = $("#email").val();
      var celular = $("#celular_u").val();
      var telefone = $("#telefone_u").val();
      var item2 = $("#cidade_autocomplete").val();
      var rv2 = $("#rv").val();
      var bairro2 = $("#bairro").val();
      var site2 = $("#site").val();
      var numero2 = $("#numero_casa").val();
      var fotoPublic = localStorage.getItem('foto_perfil');
      var nomeFoto = localStorage.getItem('nomeFoto_perfil');

      if(nomeFoto == null){
        var nomeFoto = $("#nomeFoto").val();
      }

      // alert(telefone_u+"<br>"+numero2+"<br>"+item2)

      app.request.post('https://www.limeiraweb.com.br/mateus/php/update_perfil_profissional.php', {id_usuario:v_id,telefone_u:telefone,cidade_autocomplete:item2,rv:rv2,bairro:bairro2,site:site2,numero_casa:numero2}, function(resposta){
        // $("#verSql").html(resposta);
      });  

      if(nome_c.trim() == ""){
        app.dialog.alert("O campo usuário não pode ficar vazio","");
        return false;
      }
      if(email_c.trim() == ""){
        app.dialog.alert("O campo email não pode ficar vazio","");
        return false;
      }
      if(celular.trim() == ""){
        app.dialog.alert("O campo celular não pode ficar vazio","");
        return false;
      }
      
      app.dialog.preloader('Alterando...');      

      // Obtém o conteúdo do textarea e divide-o em linhas
      var arrayDeLinhas = $("#bio").val().split('\n');            
      
      var resultadoHTML = '';
      // Loop para validar e converter o conteúdo para html
      for (var i=0; i<arrayDeLinhas.length; i++) {
        var linha = arrayDeLinhas[i];
        
        if(linha) {
            resultadoHTML+= linha + '<br>';
        }
          
      }                    
        
      // Mostra o resultado
      $('#resultadoBio').val(resultadoHTML);

      var bio = $('#resultadoBio').val();
        
      var id_usuario = localStorage.getItem('id_usuario');
      var v_nameuser = localStorage.getItem('usuario');
      var v_email = localStorage.getItem('email_instagram');

      if(nome_c != v_nameuser || email_c != v_email){
        app.request.post('https://www.limeiraweb.com.br/mateus/php/verificar_update.php',{
          nome:nome_c,
          email:email_c,
          usuario:v_nameuser,
          email_instagram:v_email,
        },
        function(data){
          if(data == "existeAmbos"){
            setTimeout(function () {
              app.dialog.close();
              app.dialog.alert("Email e usuário já estão em uso","");
            }, 2000);
          }else if(data == "existeUser"){
            setTimeout(function () {
              app.dialog.close();
              app.dialog.alert("Este usuário já existe","");
            }, 2000);
          }else if(data == "existe"){
            setTimeout(function () {
              app.dialog.close();
              app.dialog.alert("Este email já está em uso","");
            }, 2000);
          }else{
            // Gravando no servidor online
    
            var options = new FileUploadOptions();
          
            options.fileKey = "file";
            options.fileName = nomeFoto;
            options.mimeType = "image/jpeg";
    
            var params = new Object();
            params.value1 = nome_c;
            params.value2 = user;
            params.value3 = email_c;
            params.value4 = bio;
            params.value5 = id_usuario;
            params.value6 = celular;
    
            options.params = params;
            options.chunkedMode = false;
    
            var ft = new FileTransfer();
            ft.upload(fotoPublic,encodeURI("https://www.limeiraweb.com.br/mateus/php/insere_perfil.php"),function(){

              setTimeout(function () {
                app.dialog.alert("Alteração realizada com sucesso!!","");
                app.dialog.close();
                localStorage.setItem("id_usuario",id_usuario);
                localStorage.setItem("usuario",nome_c);
                localStorage.setItem("email_instagram",email_c);
                
                app.views.current.router.back();
                pagePerfil();
              }, 3000);


            },function(){
    
            },options);
          }
    
          fechaAlert()
        });
      }else{
        // Gravando no servidor online
        var options = new FileUploadOptions();
      
        options.fileKey = "file";
        options.fileName = nomeFoto;
        options.mimeType = "image/jpeg";

        var params = new Object();
        params.value1 = nome_c;
        params.value2 = user;
        params.value3 = email_c;
        params.value4 = bio;
        params.value5 = id_usuario;
        params.value6 = celular;

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(fotoPublic,encodeURI("https://www.limeiraweb.com.br/mateus/php/insere_perfil.php"),function(){
          setTimeout(function () {
            app.dialog.alert("Alteração realizada com sucesso!!","");
            app.dialog.close();
            localStorage.setItem("id_usuario",id_usuario);
            localStorage.setItem("usuario",nome_c);
            localStorage.setItem("email_instagram",email_c);
            fotoPublic = localStorage.removeItem('foto_perfil');
            nomeFoto = localStorage.removeItem('nomeFoto_perfil');
            
            app.views.current.router.back();
            pagePerfil();
          }, 3000);
        },function(){

        },options);
      }
  
    });

    $(".back-update").on("click", function(){
      pagePerfil();
    }); 


    });

    var listaCidades = "";
    app.request.post('https://www.limeiraweb.com.br/mateus/php/lista_de_cidades_projeto.php', { }, function (resposta) {
        listaCidades = (resposta).split(',');
    })
    
    var autocompleteDropdownSimple = app.autocomplete.create({
        inputEl: '#cidade_autocomplete',
        openIn: 'dropdown',
        source: function (query, render) {
          var results = [];
          if (query.length === 0) {
            render(results);
            return;
          }
          // Find matched items
          for (var i = 0; i < listaCidades.length; i++) {
            if (listaCidades[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(listaCidades[i]);
          }
          // Render items by passing array with result items
          render(results);
        }
    });

}

function chat(){

  $(document).ready(function(){
    online();

    escuroON();

    var v_id = localStorage.getItem('id_usuario');
    var v_perfil = localStorage.getItem('id_perfil');
    var dados = "";

    app.request.post('https://www.limeiraweb.com.br/mateus/php/perfil-conversa.php', {id_perfil:v_perfil}, function(resposta){
      dados1 = (resposta).split("|");
    
      $(".user-chat").html(dados1[0]);
      $("#imagePerfilChat").attr('src',dados1[1]);

      escuroON();
  
    });

    app.request({
      // url:"php/publicacao.php",
      url:"https://www.limeiraweb.com.br/mateus/php/chat.php",
      type:"POST",
      dataType:"json",
      data: {id_usuario:v_id,id_perfil:v_perfil},
      success:function(resultado){
  
        closePreLoader();
  
        for(var i=0; i<resultado.length; i++){
  
          if(v_perfil == resultado[i].enviou){
            dados+='<div class="message message-received">';
          }else{
            dados+='<div class="message message-sent">';
          }
            dados+='<div class="message-avatar" style="background-image:url(https://www.limeiraweb.com.br/mateus/php/uploads/'+resultado[i].imagePerfil+');"></div>';
            dados+='<div class="message-content">';
              dados+='<div class="message-name">'+resultado[i].nome+'</div>';
              dados+='<div class="message-header">'+resultado[i].dataFormat+'</div>';
              dados+='<div class="message-bubble">';
                dados+='<div class="message-text">'+resultado[i].conversa+'</div>';
              dados+='</div>';
            dados+='</div>';
          dados+='</div>';
          dados+='<br>';
  
        }
        $("#recebe-mensagem").html(dados);
  
        escuroON();
        
      },
      error:function(e){
  
      }
  
    });

    setTimeout(function(){
      chat();
    },1000);

  });

}

function inserirConversa(){
  $(document).ready(function(){
    $(".enviar-conversa").on("click", function(){
      var v_id = localStorage.getItem('id_usuario');
      var v_perfil = localStorage.getItem('id_perfil');
      var v_conversa = $(".resizable").val();

      app.dialog.preloader('Aguarde...');
    
      app.request.post('https://www.limeiraweb.com.br/mateus/php/enviar-conversa.php', {id_usuario:v_id,id_perfil:v_perfil,conversa:v_conversa}, function(resposta){
    
        $(".resizable").val("");
        app.dialog.close();
    
      }); 
  
    });
  });
}

function conversas_recentes(){
  $(document).ready(function(){
    online();
    escuroON();

    var v_id = localStorage.getItem('id_usuario');

    app.request.post('https://www.limeiraweb.com.br/mateus/php/conversas-recentes.php', {id_usuario:v_id}, function(resposta){
      dados = (resposta).split("|");
    
      $(".conversas-recentes").html(dados[3]);

      closePreLoader();
      escuroON();
      $(document).on("click", ".setPerfil", function(){
        var id = $(this).attr('data'); // recupera o ID
        // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
        localStorage.setItem('id_perfil', id); // armazena o ID no ambiente local
      });
  
    }); 

    // setTimeout(function(){
    //   conversas_recentes();
    // },1000);

  });
}

function enviadas(){
  $(document).ready(function(){
    online();
    escuroON();

    var v_id = localStorage.getItem('id_usuario');

    app.request.post('https://www.limeiraweb.com.br/mateus/php/conversas-recentes.php', {id_usuario:v_id}, function(resposta){
      dados = (resposta).split("|");
    
      $(".enviadas").html(dados[0]);

      closePreLoader();
      escuroON();
      $(document).on("click", ".setPerfil", function(){
        var id = $(this).attr('data'); // recupera o ID
        // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
        localStorage.setItem('id_perfil', id); // armazena o ID no ambiente local
      });
  
    }); 

    // setTimeout(function(){
    //   conversas_recentes();
    // },1000);

  });
}

function categoria(){
  $(document).ready(function(){
    var v_id = localStorage.getItem("id_usuario");

    app.request.post('https://www.limeiraweb.com.br/mateus/php/verPerfil_projeto.php',{
      id_usuario:v_id,
      },
      function(resposta){
        dados = (resposta).split("|");

        if(dados[4] !=""){
          setTimeout(function () {
            app.dialog.alert("Esse perfil ja é profissional!!","AVISO");
            mainView.router.navigate({name:'perfil'});
          }, 500);
        }

    }); 
    // Inicializar o pesquisar
    var searchbar = app.searchbar.create({
      el: '.searchbar',
      searchContainer: '.list',
      searchIn: '.item-title',
    }); // Fim searchbar

    app.request.post('https://www.limeiraweb.com.br/mateus/php/lista_de_categorias.php', {}, function(resposta){
    dados = (resposta).split("|");
      $("#list_categorias").html(dados[0]);
      closePreLoader();

      $(document).on("click", ".select_categoria", function(){
        var getCategoria = $(this).attr('data-categoria'); // recupera o ID
        // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
        localStorage.setItem('categoria', getCategoria); // armazena o ID no ambiente local
      });
      escuroON();
    }); 

    $("#gravar-categoria").on("click", function(){
      var categ = localStorage.getItem("categoria");
      var fk_id_usuario = localStorage.getItem("id_usuario");

      if(categ == null){
        app.dialog.alert("Selecione uma categoria!!");
        return false;
      }else{
        app.dialog.preloader('Aguarde...');
      }

      app.request.post('https://www.limeiraweb.com.br/mateus/php/insert_categoria.php', {id_usuario:fk_id_usuario,categoria:categ}, function(resposta){
    
        setTimeout(function(){
          app.dialog.alert("Perfil profissional ativado!! <br> Agora você terá acesso a todos os recursos disponíveis, para gerenciar o seu negócio.","AVISO");
          localStorage.removeItem('categoria');
          mainView.router.navigate({name:'perfil'});
          app.dialog.close();
        },1000);

      }); 

    });

    escuroON();
  }); // FIM READY
}

function insertFeedback(){
  var v_perfil = localStorage.getItem('id_perfil');
  var v_user = localStorage.getItem('id_usuario');
  
  $("#inserir-feedback").on("click", function(){

    app.dialog.preloader('Publicando...');

    var vComentario = $("#feedback").val();

    if(vComentario.trim() == ""){
      app.dialog.alert("O campo comentário não pode ficar vazio","AVISO");
      return false;
    }

    app.request.post('https://www.limeiraweb.com.br/mateus/php/inserirFeedback.php', {id_usuario:v_user,id_perfil:v_perfil,feedback:vComentario}, function(resposta){

      setTimeout(function () {
        app.dialog.close();
        // $("#feedback").val("");
        app.views.current.router.back();
        verFeedback();
      }, 500);

    });

  });
}

function verFeedback(){

  $(document).ready(function(){
    var v_perfil = localStorage.getItem('id_perfil');

    app.request.post('https://www.limeiraweb.com.br/mateus/php/verFeedback.php', {id_perfil:v_perfil}, function(resposta){
      $("#verFeedback").html(resposta);  
      escuroON();
      closePreLoader();
    });

    escuroON();

  });

}

function avaliacao(){
  $(document).ready(function(){

    var v_perfil = localStorage.getItem('id_perfil');
    var v_user = localStorage.getItem('id_usuario');

    app.request.post('https://www.limeiraweb.com.br/mateus/php/feedback.php', {id_perfil:v_perfil,id_usuario:v_user}, function(resposta){
      dados = (resposta).split("|");
      closePreLoader();

      if(dados[0] !="" && dados[1] !=""){
        app.dialog.close();
      }else if(v_user == v_perfil){
        app.dialog.close();
      }else{
        setTimeout(function(){
          app.dialog.alert(
            '<div class="estrelas text-align-center">'+
              '<input type="radio" id="cm_star-empty" name="fb" value="" checked/>'+
              '<label for="cm_star-1"><i class="fa" onclick="setStar1();"></i></label>'+
              '<input type="radio" id="cm_star-1" class="avaliar" name="fb" value="1"/>'+
              '<label for="cm_star-2"><i class="fa" onclick="setStar2();"></i></label>'+
              '<input type="radio" id="cm_star-2" class="avaliar" name="fb" value="2"/>'+
              '<label for="cm_star-3"><i class="fa" onclick="setStar3();"></i></label>'+
              '<input type="radio" id="cm_star-3" class="avaliar" name="fb" value="3"/>'+
              '<label for="cm_star-4"><i class="fa" onclick="setStar4();"></i></label>'+
              '<input type="radio" id="cm_star-4" class="avaliar" name="fb" value="4"/>'+
              '<label for="cm_star-5"><i class="fa" onclick="setStar5();"></i></label>'+
              '<input type="radio" id="cm_star-5" class="avaliar" name="fb" value="5"/>'+
            '</div>','<div class="text-align-center">Avalie esse profissional</div>');
        },1000);
      }

      $(".notaAV").html(dados[2]);

      if(dados[3] == undefined || dados[3] == "" || dados[3] == 0){
        result_star5 = "";
        result_star4 = ""; 
        result_star3 = "";  
        result_star2 = "";
        result_star1 = "";
        $(".TotalAV").html("0 Avaliações");
      }else{
        $(".TotalAV").html(dados[3]+" Avaliações");
        conta5 = 100 * dados[9];
        result_star5 = conta5 / dados[3];
        result_star5 = result_star5.toFixed(0);
  
        conta4 = 100 * dados[4];
        result_star4 = conta4 / dados[3];
        result_star4 = result_star4.toFixed(0);
  
        conta3 = 100 * dados[8];
        result_star3 = conta3 / dados[3];
        result_star3 = result_star3.toFixed(0);
  
        conta2 = 100 * dados[7];
        result_star2 = conta2 / dados[3];
        result_star2 = result_star2.toFixed(0);
  
        conta1 = 100 * dados[6];
        result_star1 = conta1 / dados[3];
        result_star1 = result_star1.toFixed(0);
      }

      if(result_star5 == 0 || result_star5 == ""){
        $('.star_5').attr('data-progress','0');
        $('.result_star5 .progressbar span').css('transform','translate3d(-100%, 0px, 0px)');
        $('.porce_star5').html('0%');
      }else{
        $('.star_5').attr('data-progress',result_star5);
        if(result_star5 == 0){
          $('.result_star5 .progressbar span').css('transform','translate3d(-100%, 0px, 0px)');
        }else if(result_star5 > 0 && result_star5 < 10){
          $('.result_star5 .progressbar span').css('transform','translate3d(-95%, 0px, 0px)');
        }else if(result_star5 >=10 && result_star5 < 15){
          $('.result_star5 .progressbar span').css('transform','translate3d(-90%, 0px, 0px)');
        }else if(result_star5 >=15 && result_star5 < 20){
          $('.result_star5 .progressbar span').css('transform','translate3d(-85%, 0px, 0px)');
        }else if(result_star5 >=20 && result_star5 < 25){
          $('.result_star5 .progressbar span').css('transform','translate3d(-80%, 0px, 0px)');
        }else if(result_star5 >=25 && result_star5 < 30){
          $('.result_star5 .progressbar span').css('transform','translate3d(-75%, 0px, 0px)');
        }else if(result_star5 >=30 && result_star5 < 35){
          $('.result_star5 .progressbar span').css('transform','translate3d(-70%, 0px, 0px)');
        }else if(result_star5 >=35 && result_star5 < 40){
          $('.result_star5 .progressbar span').css('transform','translate3d(-65%, 0px, 0px)');
        }else if(result_star5 >=40 && result_star5 < 45){
          $('.result_star5 .progressbar span').css('transform','translate3d(-60%, 0px, 0px)');
        }else if(result_star5 >=45 && result_star5 < 50){
          $('.result_star5 .progressbar span').css('transform','translate3d(-55%, 0px, 0px)');
        }else if(result_star5 >=50 && result_star5 < 55){
          $('.result_star5 .progressbar span').css('transform','translate3d(-50%, 0px, 0px)');
        }else if(result_star5 >=55 && result_star5 < 60){
          $('.result_star5 .progressbar span').css('transform','translate3d(-45%, 0px, 0px)');
        }else if(result_star5 >=60 && result_star5 < 65){
          $('.result_star5 .progressbar span').css('transform','translate3d(-40%, 0px, 0px)');
        }else if(result_star5 >=65 && result_star5 < 70){
          $('.result_star5 .progressbar span').css('transform','translate3d(-35%, 0px, 0px)');
        }else if(result_star5 >=70 && result_star5 < 75){
          $('.result_star5 .progressbar span').css('transform','translate3d(-30%, 0px, 0px)');
        }else if(result_star5 >=75 && result_star5 < 80){
          $('.result_star5 .progressbar span').css('transform','translate3d(-25%, 0px, 0px)');
        }else if(result_star5 >=80 && result_star5 < 85){
          $('.result_star5 .progressbar span').css('transform','translate3d(-20%, 0px, 0px)');
        }else if(result_star5 >=85 && result_star5 < 90){
          $('.result_star5 .progressbar span').css('transform','translate3d(-15%, 0px, 0px)');
        }else if(result_star5 >=90 && result_star5 < 95){
          $('.result_star5 .progressbar span').css('transform','translate3d(-10%, 0px, 0px)');
        }else if(result_star5 >=95 && result_star5 < 100){
          $('.result_star5 .progressbar span').css('transform','translate3d(-5%, 0px, 0px)');
        }else if(result_star5 == 100){
          $('.result_star5 .progressbar span').css('transform','translate3d(0%, 0px, 0px)');
        }
        $('.porce_star5').html(result_star5+'%');
      }
      
      if(result_star4 == 0 || result_star4 == ""){
        $('.star_4').attr('data-progress','0');
        $('.result_star4 .progressbar span').css('transform','translate3d(-100%, 0px, 0px)');
        $('.porce_star4').html('0%');
      }else{
        $('.star_4').attr('data-progress',result_star4);
        if(result_star4 == 0){
          $('.result_star4 .progressbar span').css('transform','translate3d(-100%, 0px, 0px)');
        }else if(result_star4 > 0 && result_star4 < 10){
          $('.result_star4 .progressbar span').css('transform','translate3d(-95%, 0px, 0px)');
        }else if(result_star4 >=10 && result_star4 < 15){
          $('.result_star4 .progressbar span').css('transform','translate3d(-90%, 0px, 0px)');
        }else if(result_star4 >=15 && result_star4 < 20){
          $('.result_star4 .progressbar span').css('transform','translate3d(-85%, 0px, 0px)');
        }else if(result_star4 >=20 && result_star4 < 25){
          $('.result_star4 .progressbar span').css('transform','translate3d(-80%, 0px, 0px)');
        }else if(result_star4 >=25 && result_star4 < 30){
          $('.result_star4 .progressbar span').css('transform','translate3d(-75%, 0px, 0px)');
        }else if(result_star4 >=30 && result_star4 < 35){
          $('.result_star4 .progressbar span').css('transform','translate3d(-70%, 0px, 0px)');
        }else if(result_star4 >=35 && result_star4 < 40){
          $('.result_star4 .progressbar span').css('transform','translate3d(-65%, 0px, 0px)');
        }else if(result_star4 >=40 && result_star4 < 45){
          $('.result_star4 .progressbar span').css('transform','translate3d(-60%, 0px, 0px)');
        }else if(result_star4 >=45 && result_star4 < 50){
          $('.result_star4 .progressbar span').css('transform','translate3d(-55%, 0px, 0px)');
        }else if(result_star4 >=50 && result_star4 < 55){
          $('.result_star4 .progressbar span').css('transform','translate3d(-50%, 0px, 0px)');
        }else if(result_star4 >=55 && result_star4 < 60){
          $('.result_star4 .progressbar span').css('transform','translate3d(-45%, 0px, 0px)');
        }else if(result_star4 >=60 && result_star4 < 65){
          $('.result_star4 .progressbar span').css('transform','translate3d(-40%, 0px, 0px)');
        }else if(result_star4 >=65 && result_star4 < 70){
          $('.result_star4 .progressbar span').css('transform','translate3d(-35%, 0px, 0px)');
        }else if(result_star4 >=70 && result_star4 < 75){
          $('.result_star4 .progressbar span').css('transform','translate3d(-30%, 0px, 0px)');
        }else if(result_star4 >=75 && result_star4 < 80){
          $('.result_star4 .progressbar span').css('transform','translate3d(-25%, 0px, 0px)');
        }else if(result_star4 >=80 && result_star4 < 85){
          $('.result_star4 .progressbar span').css('transform','translate3d(-20%, 0px, 0px)');
        }else if(result_star4 >=85 && result_star4 < 90){
          $('.result_star4 .progressbar span').css('transform','translate3d(-15%, 0px, 0px)');
        }else if(result_star4 >=90 && result_star4 < 95){
          $('.result_star4 .progressbar span').css('transform','translate3d(-10%, 0px, 0px)');
        }else if(result_star4 >=95 && result_star4 < 100){
          $('.result_star4 .progressbar span').css('transform','translate3d(-5%, 0px, 0px)');
        }else if(result_star4 == 100){
          $('.result_star4 .progressbar span').css('transform','translate3d(0%, 0px, 0px)');
        }
        $('.porce_star4').html(result_star4+'%');
      }
      
      if(result_star3 == 0 || result_star3 == ""){
        $('.star_3').attr('data-progress','0');
        $('.result_star3 .progressbar span').css('transform','translate3d(-100%, 0px, 0px)');
        $('.porce_star3').html('0%');
      }else{
        $('.star_3').attr('data-progress',result_star3);
        if(result_star3 == 0){
          $('.result_star3 .progressbar span').css('transform','translate3d(-100%, 0px, 0px)');
        }else if(result_star3 > 0 && result_star3 < 10){
          $('.result_star3 .progressbar span').css('transform','translate3d(-95%, 0px, 0px)');
        }else if(result_star3 >=10 && result_star3 < 15){
          $('.result_star3 .progressbar span').css('transform','translate3d(-90%, 0px, 0px)');
        }else if(result_star3 >=15 && result_star3 < 20){
          $('.result_star3 .progressbar span').css('transform','translate3d(-85%, 0px, 0px)');
        }else if(result_star3 >=20 && result_star3 < 25){
          $('.result_star3 .progressbar span').css('transform','translate3d(-80%, 0px, 0px)');
        }else if(result_star3 >=25 && result_star3 < 30){
          $('.result_star3 .progressbar span').css('transform','translate3d(-75%, 0px, 0px)');
        }else if(result_star3 >=30 && result_star3 < 35){
          $('.result_star3 .progressbar span').css('transform','translate3d(-70%, 0px, 0px)');
        }else if(result_star3 >=35 && result_star3 < 40){
          $('.result_star3 .progressbar span').css('transform','translate3d(-65%, 0px, 0px)');
        }else if(result_star3 >=40 && result_star3 < 45){
          $('.result_star3 .progressbar span').css('transform','translate3d(-60%, 0px, 0px)');
        }else if(result_star3 >=45 && result_star3 < 50){
          $('.result_star3 .progressbar span').css('transform','translate3d(-55%, 0px, 0px)');
        }else if(result_star3 >=50 && result_star3 < 55){
          $('.result_star3 .progressbar span').css('transform','translate3d(-50%, 0px, 0px)');
        }else if(result_star3 >=55 && result_star3 < 60){
          $('.result_star3 .progressbar span').css('transform','translate3d(-45%, 0px, 0px)');
        }else if(result_star3 >=60 && result_star3 < 65){
          $('.result_star3 .progressbar span').css('transform','translate3d(-40%, 0px, 0px)');
        }else if(result_star3 >=65 && result_star3 < 70){
          $('.result_star3 .progressbar span').css('transform','translate3d(-35%, 0px, 0px)');
        }else if(result_star3 >=70 && result_star3 < 75){
          $('.result_star3 .progressbar span').css('transform','translate3d(-30%, 0px, 0px)');
        }else if(result_star3 >=75 && result_star3 < 80){
          $('.result_star3 .progressbar span').css('transform','translate3d(-25%, 0px, 0px)');
        }else if(result_star3 >=80 && result_star3 < 85){
          $('.result_star3 .progressbar span').css('transform','translate3d(-20%, 0px, 0px)');
        }else if(result_star3 >=85 && result_star3 < 90){
          $('.result_star3 .progressbar span').css('transform','translate3d(-15%, 0px, 0px)');
        }else if(result_star3 >=90 && result_star3 < 95){
          $('.result_star3 .progressbar span').css('transform','translate3d(-10%, 0px, 0px)');
        }else if(result_star3 >=95 && result_star3 < 100){
          $('.result_star3 .progressbar span').css('transform','translate3d(-5%, 0px, 0px)');
        }else if(result_star3 == 100){
          $('.result_star3 .progressbar span').css('transform','translate3d(0%, 0px, 0px)');
        }
        $('.porce_star3').html(result_star3+'%');
      }
      
      if(result_star2 == 0 || result_star2 == ""){
        $('.star_2').attr('data-progress','0');
        $('.result_star2 .progressbar span').css('transform','translate3d(-100%, 0px, 0px)');
        $('.porce_star2').html('0%');
      }else{
        $('.star_2').attr('data-progress',result_star2);
        if(result_star2 == 0){
          $('.result_star2 .progressbar span').css('transform','translate3d(-100%, 0px, 0px)');
        }else if(result_star2 > 0 && result_star2 < 10){
          $('.result_star2 .progressbar span').css('transform','translate3d(-95%, 0px, 0px)');
        }else if(result_star2 >=10 && result_star2 < 15){
          $('.result_star2 .progressbar span').css('transform','translate3d(-90%, 0px, 0px)');
        }else if(result_star2 >=15 && result_star2 < 20){
          $('.result_star2 .progressbar span').css('transform','translate3d(-85%, 0px, 0px)');
        }else if(result_star2 >=20 && result_star2 < 25){
          $('.result_star2 .progressbar span').css('transform','translate3d(-80%, 0px, 0px)');
        }else if(result_star2 >=25 && result_star2 < 30){
          $('.result_star2 .progressbar span').css('transform','translate3d(-75%, 0px, 0px)');
        }else if(result_star2 >=30 && result_star2 < 35){
          $('.result_star2 .progressbar span').css('transform','translate3d(-70%, 0px, 0px)');
        }else if(result_star2 >=35 && result_star2 < 40){
          $('.result_star2 .progressbar span').css('transform','translate3d(-65%, 0px, 0px)');
        }else if(result_star2 >=40 && result_star2 < 45){
          $('.result_star2 .progressbar span').css('transform','translate3d(-60%, 0px, 0px)');
        }else if(result_star2 >=45 && result_star2 < 50){
          $('.result_star2 .progressbar span').css('transform','translate3d(-55%, 0px, 0px)');
        }else if(result_star2 >=50 && result_star2 < 55){
          $('.result_star2 .progressbar span').css('transform','translate3d(-50%, 0px, 0px)');
        }else if(result_star2 >=55 && result_star2 < 60){
          $('.result_star2 .progressbar span').css('transform','translate3d(-45%, 0px, 0px)');
        }else if(result_star2 >=60 && result_star2 < 65){
          $('.result_star2 .progressbar span').css('transform','translate3d(-40%, 0px, 0px)');
        }else if(result_star2 >=65 && result_star2 < 70){
          $('.result_star2 .progressbar span').css('transform','translate3d(-35%, 0px, 0px)');
        }else if(result_star2 >=70 && result_star2 < 75){
          $('.result_star2 .progressbar span').css('transform','translate3d(-30%, 0px, 0px)');
        }else if(result_star2 >=75 && result_star2 < 80){
          $('.result_star2 .progressbar span').css('transform','translate3d(-25%, 0px, 0px)');
        }else if(result_star2 >=80 && result_star2 < 85){
          $('.result_star2 .progressbar span').css('transform','translate3d(-20%, 0px, 0px)');
        }else if(result_star2 >=85 && result_star2 < 90){
          $('.result_star2 .progressbar span').css('transform','translate3d(-15%, 0px, 0px)');
        }else if(result_star2 >=90 && result_star2 < 95){
          $('.result_star2 .progressbar span').css('transform','translate3d(-10%, 0px, 0px)');
        }else if(result_star2 >=95 && result_star2 < 100){
          $('.result_star2 .progressbar span').css('transform','translate3d(-5%, 0px, 0px)');
        }else if(result_star2 == 100){
          $('.result_star2 .progressbar span').css('transform','translate3d(0%, 0px, 0px)');
        }
        $('.porce_star2').html(result_star2+'%');
      }

      if(result_star1 == 0 || result_star1 == ""){
        $('.star_1').attr('data-progress','0');
        $('.result_star1 .progressbar span').css('transform','translate3d(-100%, 0px, 0px)');
        $('.porce_star1').html('0%');
      }else{
        $('.star_1').attr('data-progress',result_star1);
        if(result_star1 == 0){
          $('.result_star1 .progressbar span').css('transform','translate3d(-100%, 0px, 0px)');
        }else if(result_star1 > 0 && result_star1 < 10){
          $('.result_star1 .progressbar span').css('transform','translate3d(-95%, 0px, 0px)');
        }else if(result_star1 >=10 && result_star1 < 15){
          $('.result_star1 .progressbar span').css('transform','translate3d(-90%, 0px, 0px)');
        }else if(result_star1 >=15 && result_star1 < 20){
          $('.result_star1 .progressbar span').css('transform','translate3d(-85%, 0px, 0px)');
        }else if(result_star1 >=20 && result_star1 < 25){
          $('.result_star1 .progressbar span').css('transform','translate3d(-80%, 0px, 0px)');
        }else if(result_star1 >=25 && result_star1 < 30){
          $('.result_star1 .progressbar span').css('transform','translate3d(-75%, 0px, 0px)');
        }else if(result_star1 >=30 && result_star1 < 35){
          $('.result_star1 .progressbar span').css('transform','translate3d(-70%, 0px, 0px)');
        }else if(result_star1 >=35 && result_star1 < 40){
          $('.result_star1 .progressbar span').css('transform','translate3d(-65%, 0px, 0px)');
        }else if(result_star1 >=40 && result_star1 < 45){
          $('.result_star1 .progressbar span').css('transform','translate3d(-60%, 0px, 0px)');
        }else if(result_star1 >=45 && result_star1 < 50){
          $('.result_star1 .progressbar span').css('transform','translate3d(-55%, 0px, 0px)');
        }else if(result_star1 >=50 && result_star1 < 55){
          $('.result_star1 .progressbar span').css('transform','translate3d(-50%, 0px, 0px)');
        }else if(result_star1 >=55 && result_star1 < 60){
          $('.result_star1 .progressbar span').css('transform','translate3d(-45%, 0px, 0px)');
        }else if(result_star1 >=60 && result_star1 < 65){
          $('.result_star1 .progressbar span').css('transform','translate3d(-40%, 0px, 0px)');
        }else if(result_star1 >=65 && result_star1 < 70){
          $('.result_star1 .progressbar span').css('transform','translate3d(-35%, 0px, 0px)');
        }else if(result_star1 >=70 && result_star1 < 75){
          $('.result_star1 .progressbar span').css('transform','translate3d(-30%, 0px, 0px)');
        }else if(result_star1 >=75 && result_star1 < 80){
          $('.result_star1 .progressbar span').css('transform','translate3d(-25%, 0px, 0px)');
        }else if(result_star1 >=80 && result_star1 < 85){
          $('.result_star1 .progressbar span').css('transform','translate3d(-20%, 0px, 0px)');
        }else if(result_star1 >=85 && result_star1 < 90){
          $('.result_star1 .progressbar span').css('transform','translate3d(-15%, 0px, 0px)');
        }else if(result_star1 >=90 && result_star1 < 95){
          $('.result_star1 .progressbar span').css('transform','translate3d(-10%, 0px, 0px)');
        }else if(result_star1 >=95 && result_star1 < 100){
          $('.result_star1 .progressbar span').css('transform','translate3d(-5%, 0px, 0px)');
        }else if(result_star1 == 100){
          $('.result_star1 .progressbar span').css('transform','translate3d(0%, 0px, 0px)');
        }
        $('.porce_star1').html(result_star1+'%');
      }
      
    });  

  });

}

function setStar1(){
  localStorage.setItem("estrelas","1");

  var star = localStorage.getItem("estrelas");
  var v_perfil = localStorage.getItem('id_perfil');
  var v_user = localStorage.getItem('id_usuario');

  app.request.post('https://www.limeiraweb.com.br/mateus/php/inserirAvaliacao.php', {id_perfil:v_perfil,id_usuario:v_user,estrelas:star}, function(resposta){
    app.dialog.alert("Obrigado pelo seu Feedback",""); 
    app.dialog.close();
    localStorage.removeItem("estrelas");
    avaliacao();
  });  

}
function setStar2(){
  localStorage.setItem("estrelas","2");

  var star = localStorage.getItem("estrelas");
  var v_perfil = localStorage.getItem('id_perfil');
  var v_user = localStorage.getItem('id_usuario');

  app.request.post('https://www.limeiraweb.com.br/mateus/php/inserirAvaliacao.php', {id_perfil:v_perfil,id_usuario:v_user,estrelas:star}, function(resposta){
    app.dialog.alert("Obrigado pelo seu Feedback",""); 
    app.dialog.close();
    localStorage.removeItem("estrelas");
    avaliacao();
  });  
}
function setStar3(){
  localStorage.setItem("estrelas","3");

  var star = localStorage.getItem("estrelas");
  var v_perfil = localStorage.getItem('id_perfil');
  var v_user = localStorage.getItem('id_usuario');

  app.request.post('https://www.limeiraweb.com.br/mateus/php/inserirAvaliacao.php', {id_perfil:v_perfil,id_usuario:v_user,estrelas:star}, function(resposta){
    app.dialog.alert("Obrigado pelo seu Feedback",""); 
    app.dialog.close();
    localStorage.removeItem("estrelas");
    avaliacao();
  });  
}
function setStar4(){
  localStorage.setItem("estrelas","4");

  var star = localStorage.getItem("estrelas");
  var v_perfil = localStorage.getItem('id_perfil');
  var v_user = localStorage.getItem('id_usuario');

  app.request.post('https://www.limeiraweb.com.br/mateus/php/inserirAvaliacao.php', {id_perfil:v_perfil,id_usuario:v_user,estrelas:star}, function(resposta){
    app.dialog.alert("Obrigado pelo seu Feedback",""); 
    app.dialog.close();
    localStorage.removeItem("estrelas");
    avaliacao();
  });  
}
function setStar5(){
  localStorage.setItem("estrelas","5");

  var star = localStorage.getItem("estrelas");
  var v_perfil = localStorage.getItem('id_perfil');
  var v_user = localStorage.getItem('id_usuario');

  app.request.post('https://www.limeiraweb.com.br/mateus/php/inserirAvaliacao.php', {id_perfil:v_perfil,id_usuario:v_user,estrelas:star}, function(resposta){
    app.dialog.alert("Obrigado pelo seu Feedback",""); 
    app.dialog.close();
    localStorage.removeItem("estrelas");
    avaliacao();
  });  
}

function inserirVisitantes(){
  $(document).ready(function(){
    var v_perfil = localStorage.getItem('id_perfil');
    var v_user = localStorage.getItem('id_usuario');

    app.request.post('https://www.limeiraweb.com.br/mateus/php/inserirVisitantes.php', {id_perfil:v_perfil,id_usuario:v_user}, function(resposta){ }); 

  });
}

function verAtividades(){
  $(document).ready(function(){
    var v_user = localStorage.getItem('id_usuario');

    app.request.post('https://www.limeiraweb.com.br/mateus/php/verAtividades.php', {id_usuario:v_user}, function(resposta){ 
      dados = (resposta).split("|");
      closePreLoader();

      $(".visitas_hoje").html(dados[0]);
      $(".seguidores-hoje").html(dados[1]);
      $(".visitas_semana").html(dados[2]);
      $(".seguidores_semana").html(dados[3]);
      $(".visitas_mes").html(dados[4]);
      $(".seguidores_mes").html(dados[5]);
      $(".number_curtida").html(dados[6]);
      $("#imgPublic").attr("src",dados[7]);
      $(".number_comentario").html(dados[8]);
      $("#imgPublic2").attr("src",dados[9]);

      $("#fk_id_public1").val(dados[10]);
      $("#fk_id_public2").val(dados[11]);

    });

    $("#imgPublic").on("click", function(){
      var fk_id_public1 = $("#fk_id_public1").val();
      localStorage.setItem("id_public",fk_id_public1);
    });

    $("#imgPublic2").on("click", function(){
      var fk_id_public2 = $("#fk_id_public2").val();
      localStorage.setItem("id_public",fk_id_public2);
    });

  });
}

function sobre(){ 
  var fk_user_sobre = localStorage.getItem("id_perfil");
  
  $(document).ready(function(){

    $(".setIdADM").on("click", function(){
      localStorage.setItem("id_perfil","1");
    });

    $(".back-sobre").on("click", function(){
      localStorage.setItem("id_perfil",fk_user_sobre);
    });

    $("#facebook").on("click", function(){
      window.open('https://www.facebook.com/profile.php?id=100004901702524', '_blank');
    });

    $("#instagram").on("click", function(){
      window.open('https://www.instagram.com/teusoares1/', '_blank');
    });

    $("#whatsapp").on("click", function(){
      window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5519998317785', '_blank');
    });

  });

}

function suporte(){
  $(document).ready(function(){

    $("#gravar-suporte").on("click", function(){
      var v_id = localStorage.getItem("id_usuario");
      var vSuporte = $("#suporte").val();
      app.dialog.preloader('Enviando...');

      app.request.post('https://www.limeiraweb.com.br/mateus/php/suporte.php', {id_usuario:v_id,suporte:vSuporte}, function(resposta){ 

        setTimeout(function(){
          app.dialog.alert("Recebemos seu pedido de suporte, iremos avisar quando seu problema for resolvido ou entraremos em contato","AVISO");
          app.dialog.close();
          app.views.current.router.back();
          fechaAlert();
        },1000);

      });

    });

  });
}

function bug(){
  $(document).ready(function(){
    $("#gravar-bug").on("click", function(){
      var v_id = localStorage.getItem("id_usuario");
      var vBug = $("#bug").val();
      app.dialog.preloader('Enviando...');

      app.request.post('https://www.limeiraweb.com.br/mateus/php/bug.php', {id_usuario:v_id,bug:vBug}, function(resposta){ 

        setTimeout(function(){
          app.dialog.alert("Obrigado pelo seu reporte","AVISO");
          app.dialog.close();
          app.views.current.router.back();
          fechaAlert();
        },1000);

      });

    });
  });
}

function painelADM(){
  var id_adm = localStorage.getItem("id_usuario");
  $(document).ready(function(){
    app.request.post('https://www.limeiraweb.com.br/mateus/php/painel-adm.php', { }, function(resposta){ 
      dados = (resposta).split("|");
      closePreLoader();

      $("#verSuporte").html(dados[0]);
      $("#verBug").html(dados[1]);

      $(document).on("click", ".setADM", function(){
        var id = $(this).attr('data');
        localStorage.setItem('id_perfil', id); 
      });   
      
      escuroON();

    });

    $(".back-adm").on("click", function(){
      localStorage.setItem("id_perfil",id_adm)
    });

  });
}

function pagePublicarAnuncio(){
  $(document).ready(function(){
    online();
    perfilUsuario();
    localStorage.removeItem('foto');
    localStorage.removeItem('nomeFoto');

    $('#foto').on('click',cameraApp);

      function cameraApp(){
          navigator.camera.getPicture(onSuccess, onFail,{
              quality:100,
              destinationType:Camera.DestinationType.FILE_URI,
              saveToPhotoAlbum:true,  // bolean
              sourceType:Camera.PictureSourceType.CAMERA,
              mediaType:Camera.MediaType.PICTURE,	
              encodingType:Camera.EncodingType.JPEG,
              targetWidth:1080,
              targetHeight:1080,
              allowEdit:true,
          });
      }
      
      function onSuccess(foto) {
          $('#imagem').attr('src',foto);
          localStorage.setItem('foto',foto);
          nomeFoto();
      }
      
      function onFail(message) {
          alert('Erro ao capturar a imagem: ' + message);
      }

      $('#galeria').on('click',galeria);
  
      function galeria(){
          navigator.camera.getPicture(onSuccess, onFail,{
              quality:100,
              destinationType:Camera.DestinationType.FILE_URI,
              sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
              mediaType:Camera.MediaType.PICTURE,	
              targetWidth:1080,
              targetHeight:1080,
              allowEdit:true,
          });
      }
      
      function onSuccess(foto) {
          $('#imagem').attr('src',foto);
          localStorage.setItem('foto',foto);
          nomeFoto();
      }
      
      function onFail(message) {
          alert('Erro ao capturar a imagem: ' + message);
      }

      escuroON();

  });

  $("#publicar").on("click",function(){

    var idUusuario = localStorage.getItem("id_usuario");

    app.request.post('https://www.limeiraweb.com.br/mateus/php/verificar_anuncio.php', {id_usuario:idUusuario}, function(resposta){ 
      dados = (resposta).split("|");
      
      if(dados[0] !=""){
        app.dialog.alert("Você já publicou um anúncio hoje, volte amanhã e faça um novo anúncio","AVISO");
      }else{
        var legenda = $("#legenda").val();
        var fotoPublic = localStorage.getItem('foto');
        var nomeFoto = localStorage.getItem('nomeFoto');
    
        var id_usuario = localStorage.getItem('id_usuario');
    
        if(!fotoPublic){
          app.dialog.alert("A publicação precisa de uma imagem","");
          return false;
        }
    
        app.dialog.preloader('Publicando...');
    
        // Gravando no servidor online
        var options = new FileUploadOptions();
    
        options.fileKey = "file";
        options.fileName = nomeFoto;
        options.mimeType = "image/jpeg";
    
        var params = new Object();
        params.value1 = legenda;
        params.value2 = id_usuario;
    
        options.params = params;
        options.chunkedMode = false;
    
        var ft = new FileTransfer();
        ft.upload(fotoPublic,encodeURI("https://www.limeiraweb.com.br/mateus/php/insert_public_anuncio.php"),function(){
    
          setTimeout(function () {
            app.dialog.alert("Anúncio publicado com sucesso!!","");
            app.dialog.close();
            fotoPublic = localStorage.removeItem('foto');
            nomeFoto = localStorage.removeItem('nomeFoto');
            mainView.router.navigate({name:'home'});
            publicacoes();
          }, 3000);
    
        },function(){
    
        },options);
      }

    });

  });
  escuroON();

}

function verAnuncio(){
  $(document).ready(function(){
    var v_id = localStorage.getItem("id_usuario");
    app.request.post('https://www.limeiraweb.com.br/mateus/php/verAnuncio.php', {id_usuario:v_id}, function(resposta){ 
      
      $("#resultAnuncio").html(resposta);

      closePreLoader();

      $(document).on("click", ".imgAnuncio", function(){
        var idPublic = $(this).attr('data');
        localStorage.setItem('id_public', idPublic); 
      });

      $(document).on("click", ".repostarAnuncio", function(){
        var idPublic2 = $(this).attr('data-confirm');
        localStorage.setItem('id_anuncio', idPublic2);
      });

      $(document).on("click", ".excluirAnuncio", function(){
        var idPublic3 = $(this).attr('data-excluir'); 
        localStorage.setItem('id_anuncio', idPublic3);
      });

    });
  });
}

function excluirAnuncio(){
  $(document).ready(function(){
    var idAnuncio = localStorage.getItem('id_anuncio');

    app.dialog.confirm("Deseja remover esse anúncio?","",function(){
      app.dialog.preloader('Excluindo...');
      app.request.post("https://www.limeiraweb.com.br/mateus/php/excluirAnuncio.php",{
        id_anuncio:idAnuncio,
      },function(resposta){
          app.dialog.close();
          
          localStorage.removeItem("id_anuncio");
          verAnuncio();
          
      })
    });
  });
}

function repostarAnuncio(){
  $(document).ready(function(){
    var idAnuncio = localStorage.getItem('id_anuncio');

    app.dialog.preloader('Repostando...');
    app.request.post("https://www.limeiraweb.com.br/mateus/php/repostarAnuncio.php",{
      id_anuncio:idAnuncio,
    },function(resposta){
        
      setTimeout(function(){
        app.dialog.close();
        localStorage.removeItem("id_anuncio");
        mainView.router.navigate({name:'home'});
        publicacoes();
      },1000);
        
    })
  });
}

function orcamento_solicitado(){
  $(document).ready(function(){
    $("#inserir-orçamento").on("click", function(){
      var v_id = localStorage.getItem('id_usuario');
      var idPRO = localStorage.getItem('id_perfil');
      var v_trabalho = $("#orçamento").val();
  
      app.dialog.preloader('Enviando...');
      app.request.post("https://www.limeiraweb.com.br/mateus/php/insert_orcamento_cliente.php",{
        id_usuario:v_id,id_perfil:idPRO,trabalho_solicitado:v_trabalho,
      },function(resposta){
          
        setTimeout(function(){
          app.dialog.close();
          mainView.router.navigate({name:'perfil'});
          app.dialog.alert("Pedido realizado com sucesso, aguarde a resposta do profissional","AVISO");
          localStorage.setItem("id_perfil", v_id);
        },1000);
          
      })
    });
  });
}

function verOrcamentosRealizar(){
  var salvarID = localStorage.getItem("id_usuario");
  $(document).ready(function(){
    var id = localStorage.getItem('id_usuario');

    app.request.post("https://www.limeiraweb.com.br/mateus/php/verOrcamento_realizar.php",{
      id_usuario:id,
    },function(resposta){
      closePreLoader();
      dados = (resposta).split("|");
        
      $("#orcamentoRealizar").html(dados[0]);
      $("#aguardandoResposta").html(dados[1]);
      $("#orcamentoCliente-interesse").html(dados[2]);
      $("#orcamentoCliente-recusados").html(dados[3]);

      $(document).on("click", ".verTrabalho_socilitado", function(){
        var trabalho = $(this).attr('data-trabalho');
        var cliente = $(this).attr('data-cliente');
        localStorage.setItem('id_trabalho', trabalho); 
        localStorage.setItem('id_perfil', cliente); 
      });

      escuroON();
        
    })

    $(".back-orcamento").on("click", function(){
      localStorage.setItem("id_perfil", salvarID);
      localStorage.removeItem("id_trabalho");
    });

  });
}

function resultOrcamentoCliente(){
  $(document).ready(function(){
    var idTrabalho = localStorage.getItem('id_trabalho');
    var v_id = localStorage.getItem('id_usuario');

    app.request.post("https://www.limeiraweb.com.br/mateus/php/orcamento_cliente.php",{
      id_trabalho:idTrabalho,id_usuario:v_id
    },function(resposta){
      dados = (resposta).split("|");
      closePreLoader();
        
      $("#visualizarOrcamento").html(dados[0]);

      if(dados[1] !="" && dados[2] !=""){
        $(".button-profissional").hide();
      }else{
        $(".button-profissional").show();
      }

      escuroON();
        
    })
  });
}

function resposta_orcamento(){
  $(document).ready(function(){
    $("#inserir-resposta").on("click", function(){
      var v_id = localStorage.getItem('id_usuario');
      var idPRO = localStorage.getItem('id_perfil');
      var idTrabalho = localStorage.getItem('id_trabalho');
      var v_orcamento = $("#resposta_orcamento").val();
  
      app.dialog.preloader('Enviando...');
      app.request.post("https://www.limeiraweb.com.br/mateus/php/insert_resposta_cliente.php",{
        id_usuario:v_id,id_perfil:idPRO,resposta_orcamento:v_orcamento,id_trabalho:idTrabalho
      },function(resposta){
          
        setTimeout(function(){
          app.dialog.close();
          mainView.router.navigate({name:'verOrcamentosPRO'});
          verOrcamentosRealizar();
          app.dialog.alert("Orçamento enviado com sucesso, aguarde a resposta do cliente","AVISO");
          localStorage.removeItem("id_trabalho");
          localStorage.setItem("id_perfil", v_id);
        },1000);
          
      })
    });
  });
}

function verRespostaProfissional(){
  var salvarID = localStorage.getItem("id_usuario");
  $(document).ready(function(){
    var id = localStorage.getItem('id_usuario');

    app.request.post("https://www.limeiraweb.com.br/mateus/php/verOrcamentos_solicitados.php",{
      id_usuario:id,
    },function(resposta){
      closePreLoader();
      dados = (resposta).split("|");
        
      $("#orcamentoCliente").html(dados[0]);
      $("#orcamentoCliente-interesse").html(dados[1]);

      $(document).on("click", ".verOrcamento", function(){
        var orca = $(this).attr('data-orcamento');
        var pro = $(this).attr('data-profissional');
        localStorage.setItem('id_trabalho', orca); 
        localStorage.setItem('id_perfil', pro); 
      });
        
      escuroON();
    })

    $(".back-orcamento").on("click", function(){
      localStorage.setItem("id_perfil", salvarID);
      localStorage.removeItem("id_trabalho");
    });

  });
}

function solicitacao_orcamento(){
  $(document).ready(function(){
    var idTrabalho = localStorage.getItem('id_trabalho');
    var v_id = localStorage.getItem('id_usuario');

    app.request.post("https://www.limeiraweb.com.br/mateus/php/solicitacao-orcamento.php",{
      id_trabalho:idTrabalho,id_usuario:v_id
    },function(resposta){
      dados = (resposta).split("|");
      closePreLoader();
        
      $("#solitacaoOrcamentos").html(dados[0]);

      if(dados[1] !="Aguardando"){
        $(".button-profissional").hide();
      }else{
        $(".button-profissional").show();
      }

      escuroON();
        
    })

    $("#recusar_pro").on("click", function(){
      var idTrabalho = localStorage.getItem('id_trabalho');
      app.dialog.confirm("Deseja recusar esse orçamento?","",function(){
        app.dialog.preloader('Aguarde...');
        app.request.post("https://www.limeiraweb.com.br/mateus/php/recusarOrcamento.php",{
          id_trabalho:idTrabalho,
        },function(resposta){
            app.dialog.close();
            
            // alert(resposta);
            localStorage.removeItem("id_trabalho");
            mainView.router.navigate({name:'perfil'});
            localStorage.setItem("id_perfil", v_id);
            
        })
      });
    });

    $("#interesse_pro").on("click", function(){
      var idTrabalho = localStorage.getItem('id_trabalho');
      app.dialog.preloader('Aguarde...');
      app.request.post("https://www.limeiraweb.com.br/mateus/php/interesseOrcamento.php",{
        id_trabalho:idTrabalho,
      },function(resposta){
          app.dialog.close();
          
          // alert(resposta);
          localStorage.removeItem("id_trabalho");
          app.dialog.alert("Você demostrou interesse nesse profissional, entre em contato com ele, ou aguarde até o profissional entrar em contato com você");
          app.views.current.router.back();
          verRespostaProfissional();
          
      })
    });

  });
}

// Função fecha alert de boas vindas
function fechaAlert(){
  setTimeout(function(){
    app.dialog.close();
  },2000);
}

function busca(){
  alert("Funcionou");
}