<?php
class Chatbot{
    private $opciones;
    
    //  function setOpciones($opciones){
    //     $opciones = $this->opciones;
    //  }
    //    public function setIdMensaje($idMensaje){
    //     $this->idMensaje=$idMensaje;
    // }
    // public function getIdMensaje(){
    //     return $this->idMensaje;
    // }
     function getplantillaMsg($msgBot, $opciones){
        $plantillaMsg = "<div class='container_msg_bot'>
                            <div class='container_img_bot'><img src='vista/imagenes/chatbot/botIcono.png' alt=''>
                            </div>
                            <div class='msg_bot'>
                                $msgBot
                                <div class='opciones'>
                                    $opciones
                                </div>
                                <div class='print_hour'>
                                    ".date('h:i:s a', time()).
                                "</div> 
                            </div>
                        </div>";
    return $plantillaMsg;
     }
     
     function getplantilla2Msg($msgBot, $opciones){
        $plantillaMsg = "<div class='container_msg_bot'>
                            <div class='container_img_bot'>
                            <img src='vista/imagenes/chatbot/botIcono.png' alt=''>
                            </div>
                            <div class='msg_bot'>
                                    <div class='carusel'>
                                        <ul class='listado'>$opciones</ul>
                                    </div>  
                                    <div class='controles'>
                                        <div class='ctrl icon-left-dir'></div>
                                        <div class='ctrl icon-right-dir'></div>
                                    </div> 
                                    <div class='print_hour'>
                                        ".date('h:i:s a', time())."
                                    </div>                   
                            </div>
                        </div>";
    return $plantillaMsg;
     }
}
?>