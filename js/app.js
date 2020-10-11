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
        url: 'login.html?a=7',
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
        url: 'update_usuario.html?b=3',
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
        url: 'pesquisar.html?a=b',
        on:{
          pageInit:function(){
            pesquisa_perfil()
          },
        }, 
      },
      {
        name: 'perfil',
        path: '/perfil/',
        url: 'perfil.html?b=5',
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
        url: 'perfil-profissional.html?a=5',
        on:{
          pageInit:function(){
            
          },
        }, 
      },
      {
        path: '/avaliacao/',
        url: 'avaliacao.html?a=5',
        on:{
          pageInit:function(){
            escuroON();
          },
        }, 
      },
      {
        path: '/solicite-trabalho/',
        url: 'solicite-trabalho.html?a=5',
        on:{
          pageInit:function(){
            escuroON();
          },
        }, 
      },
      {
        path: '/trabalhos/',
        url: 'trabalhos.html?a=5',
        on:{
          pageInit:function(){
            escuroON();
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
                app.dialog.alert("Bem-Vindo "+data.nome,"");

                localStorage.setItem('id_usuario',data.id_usuario);
                localStorage.setItem('usuario',data.nome);
                localStorage.setItem('email_instagram',data.email);
  
                mainView.router.navigate({name:'home'});
                fechaAlert();
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

      online();

      perfilUsuario();
      
        var dados = "";
        app.request({
          // url:"php/publicacao.php",
          url:"https://www.limeiraweb.com.br/mateus/php/publicacao_instagram.php",
          type:"POST",
          dataType:"json",
          success:function(resultado){

            closePreLoader();
            // console.log(resultado[0].prato);
            for(var i=0; i<resultado.length; i++){
      
              dados+='<div class="card demo-facebook-card">';
                dados+='<div class="display-flex justify-content-space-between">';
                  dados+='<div class="card-header">';
                    dados+='<div class="demo-facebook-avatar"><img src="https://www.limeiraweb.com.br/mateus/php/uploads/'+resultado[i].imagePerfil+'" width="100%"/></div>';
                    idUser = resultado[i].fk_id_usuario;
                    dados+='<div class="demo-facebook-name bg-black"><a href="/perfil2/" onclick=setIDP("'+idUser+'")>'+resultado[i].nome+'</a></div>';
                    dados+='<div class="demo-facebook-date">'+resultado[i].dataFormat+'</div>';
                  dados+='</div>';

                  $(".back-legenda").on("click", function(){
                    localStorage.removeItem('id_public');
                    $(".verLegenda").removeClass("display-none");
                    $(".div-list").addClass("display-none");
                    $(".navbar-index").removeClass("display-none");
                    $(".navbar-legenda").addClass("display-none");
                  });

                    if(cod_usuario == resultado[i].fk_id_usuario){
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
              dados+='<div class="demo-facebook-name bg-black"><a href="/perfil/" class="nameP" onclick=setIDP("'+idUser+'")>'+resultado[0]+'</a></div>';
              dados+='<div class="demo-facebook-date">'+resultado[6]+'</div>';
            dados+='</div>';

            $(".back-legenda").on("click", function(){
              $(".verLegenda").removeClass("display-none");
              $(".div-list").addClass("display-none");
              $(".navbar-index").removeClass("display-none");
              $(".navbar-legenda").addClass("display-none");
            });

            if(cod_usuario == resultado[4]){
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
      pagePerfil();
      // localStorage.removeItem('id_public');
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

      $(document).on("click", ".item-inner", function(){
        var id = $(this).attr('data'); // recupera o ID
        // app.dialog.alert("Home - Gravei: " + id); teste para ver se está recuperando o ID
        localStorage.setItem('id_perfil', id); // armazena o ID no ambiente local
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
  
    });
  
    escuroON();
  
    $(".logout").on("click",function(){

      app.dialog.preloader('Saindo...');

      setTimeout(function () {
        app.dialog.close();
        mainView.router.navigate({name:'login'});
        app.panel.close(".panel-right");
        // location.reload();
        localStorage.removeItem('id_usuario');
        localStorage.removeItem('usuario');
        localStorage.removeItem('email_instagram');
      }, 2000);

    });

    $(".perfilPRO").on("click",function(){
      // mainView.router.navigate({name:'login'});
      app.panel.close(".panel-right");
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

function perfilUsuario(){
  $(document).ready(function(){
    $(".perfilUsuario").on("click", function(){
      localStorage.setItem("id_perfil",cod_usuario);
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

    if(dados[4] !="" && dados[5] !=""){
      $("#editarPeril").hide();
      $(".seguirP").hide();
      $(".seguindo").show();
      $(".mensagem").show();
    }else if(v_id == v_perfil){
      $("#editarPeril").show();
      $(".seguirP").hide();
      $(".seguindo").hide();
      $(".mensagem").hide();
    }else{
      $("#editarPeril").hide();
      $(".seguirP").show();
      $(".seguindo").hide();
      $(".mensagem").show();
    }
    escuroON();

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
      $("#telefone_u").val(dados[7]);
      $("#rv").val(dados[8]);
      $("#bairro").val(dados[9]);
      $("#numero_casa").val(dados[10]);
      $("#cidade_autocomplete").val(dados[11]);
      $("#site").val(dados[12]);
      escuroON();

    });  
    
    // Função do recurso de câmera
    $(document).ready(function(){

      $("#celular_u").mask("(00) 0000-0000");
      $("#telefone_u").mask("(00) 0000-0000");

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
      var item = $("#cidade_autocomplete").val();
      var rv = $("#rv").val();
      var bairro = $("#bairro").val();
      var site = $("#site").val();
      var numero = $("#numero").val();
      var fotoPublic = localStorage.getItem('foto_perfil');
      var nomeFoto = localStorage.getItem('nomeFoto_perfil');

      if(nomeFoto == null){
        var nomeFoto = $("#nomeFoto").val();
      }

      // alert(nomeFoto);

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
            params.value7 = telefone;
            params.value8 = bairro;
            params.value9 = rv;
            params.value10 = item;
            params.value11 = numero;
            params.value12 = site;
    
            options.params = params;
            options.chunkedMode = false;
    
            var ft = new FileTransfer();
            ft.upload(fotoPublic,encodeURI("https://www.limeiraweb.com.br/mateus/php/update_perfil_profissional.php"),function(){

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
        params.value7 = telefone;
        params.value8 = bairro;
        params.value9 = rv;
        params.value10 = item;
        params.value11 = numero;
        params.value12 = site;

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(fotoPublic,encodeURI("https://www.limeiraweb.com.br/mateus/php/update_perfil_profissional.php"),function(){
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
    // Inicializar o pesquisar
    var searchbar = app.searchbar.create({
      el: '.searchbar',
      searchContainer: '.list',
      searchIn: '.item-title',
    }); // Fim searchbar

    app.request.post('https://www.limeiraweb.com.br/mateus/php/lista_de_categorias.php', {}, function(resposta){
    
      $("#list_categorias").html(resposta);

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

// Função fecha alert de boas vindas
function fechaAlert(){
  setTimeout(function(){
    app.dialog.close();
  },2000);
}

function busca(){
  alert("Funcionou");
}