import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationStart, NavigationEnd } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  pageContent : any[] = [];

  legalWarning : any[] =  [
    {
      type: "primary",
      title: "AVISO LEGAL",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Con el fin de dar cumplimiento al artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico, informamos a los usuarios de nuestros datos:"
        },
        {
          type: "list",
          typeList: "dl",
          elements: [
            {
              title: "Denominación Social:",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "SUMINISTROS FERMON S.L."
                }
              ]
            },
            {
              title: "Domicilio Social:",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "AVDA. APELES MESTRES, 9, El Prat de Llobregat, Barcelona"
                }
              ]
            },
            {
              title: "CIF:",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "B63347017"
                }
              ]
            },
            {
              title: "Teléfono:",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "(+34) 93 379 03 20"
                }
              ]
            },
            {
              title: "E-Mail:",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "info@ferreteriafermon.com"
                }
              ]
            }
          ],
          content: ""
        }
      ]
    },
    {
      type: "secondary",
      title: "OBJETO",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "SUMINISTROS FERMON S.L. (en adelante también el prestador) cómo responsable del sitio web, pone a disposición de los usuarios el presente documento, que regula el uso del sitio web buscaprat.com, con el que pretendemos dar cumplimiento a las obligaciones que dispone la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE o LSSI),así como informar a todos los usuarios del sitio web respecto de cuáles son las condiciones de uso del sitio web."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "A través de la Web, SUMINISTROS FERMON S.L. facilita a los usuarios el acceso y utilización de diferentes servicios y contenidos puestos a disposición a través del web."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Toda persona que acceda a esta web asume el papel de usuario (en adelante el usuario),e implica la aceptación total y sin reservas de todas y cada una de las disposiciones incluidas en este aviso legal, así como a cualesquiera otras disposiciones legales que fueran de aplicación."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Como usuarios, tienen que leer atentamente este Aviso Legal en cualquier de las ocasiones que entren a la web, pues ésta puede sufrir modificaciones ya que el prestador se reserva el derecho a modificar cualquier tipo de información que pudiera aparecer en la web, sin que exista la obligación de pre-avisar o poner en conocimiento de los usuarios estas obligaciones, siendo suficientes la publicación en el sitio web del prestador."
        }
      ]
    },
    {
      type: "secondary",
      title: "CONDICIONES DE ACCESO I USO DE LA WEB.",
      contents: [
        {
          type: "list",
          typeList: "ol",
          content: "",
          elements: [
            {
              title: "Carácter gratuito del acceso y uso de la web.",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "La prestación de los servicios por parte de SUMINISTROS FERMON S.L. tiene carácter gratuito para todos los Usuarios. No obstante, algunos de los servicios suministrados por el prestador a través de la Web están sujetas al pago de un precio determinado a las condicionas generales de contratación."
                }
              ]
            },
            {
              title: "Registro de Usuario.",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Con carácter general la prestación de los Servicios no exige la previa suscripción o registro de los Usuarios. Aun así, SUMINISTROS FERMON S.L. condiciona el uso de algunos de los servicios a la previa complementación del correspondiente registro de Usuario. Este registro se efectuará en la forma expresamente indicada en la propia sección del servicio."
                }
              ]
            },
            {
              title: "Veracidad de la información.",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Toda la información que facilita el Usuario tiene que ser veraz. A estos efectos, el Usuario garantiza la autenticidad de los datos comunicados a través de los formularios para la suscripción de los Servicios. Será responsabilidad del Usuario mantener toda la información facilitada a SUMINISTROS FERMON S.L. permanentemente actualizada de forma que responda, en cada momento, a su situación real. En todo caso, el Usuario será el único responsable de las manifestaciones falsas o inexactas que realice y de los perjuicios que cause al prestador o a terceros."
                }
              ]
            },
            {
              title: "Menores de edad.",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Para el uso de los servicios, los menores de edad tienen que obtener siempre previamente el consentimiento de los padres, tutores o representantes legales, responsables últimos de todos los actos realizados por los menores a su cargo. La responsabilidad en la determinación de contenidos concretos a los cuales acceden los menores corresponde a aquellos, es por eso que si acceden a contenidos no apropiados por Internet, se tendrán que establecer en sus ordenadores mecanismos, en particular programas informáticos, filtros y bloqueos, que permitan limitar los contenidos disponibles y, a pesar de que no sean infalibles, son de especial utilidad para controlar y restringir los materiales a los que pueden acceder los menores."
                }
              ]
            },
            {
              title: "Obligación de hacer un uso correcto de la Web.",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "El Usuario se compromete a utilizar la Web de conformidad a la Ley y al presente Aviso Legal, así como a la moral y a buenas costumbres. A tal efecto, el Usuario se abstendrá de utilizar la página con finalidades ilícitas o prohibidas, lesivas de derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de equipos informáticos o documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático del prestador."
                },
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "En particular, y a título indicativo pero no exhaustivo, el Usuario se compromete a no transmitir, difundir o poner a disposición de terceros informaciones, datos, contenidos, mensajes, gráficos, dibujos, archivos de sonido o imagen, fotografías, grabaciones, software y, en general, cualquier clase de material que:"
                },
                {
                  type: "list",
                  typeList: "ul",
                  content: "",
                  elements: [
                    {
                      title: "",
                      contents: [
                        {
                          type: "text",
                          typeList: "",
                          elements: [],
                          content: "sea contraria, desprecie o atente contra los derechos fundamentales y las libertades públicas reconocidas constitucionalmente, en tratados internacionales y otras normas vigentes"
                        }
                      ]
                    },
                    {
                      title: "",
                      contents: [
                        {
                          type: "text",
                          typeList: "",
                          elements: [],
                          content: "induzca, incite o promueva actuaciones delictivas, denigrantes, difamatorias, violentas o, en general, contrarias a la ley, a la moral y al orden público"
                        }
                      ]
                    },
                    {
                      title: "",
                      contents: [
                        {
                          type: "text",
                          typeList: "",
                          elements: [],
                          content: "induzca, incite o promueva actuaciones, actitudes o pensamientos discriminatorios por razón de sexo, raza, religión, creencias, edad o condición"
                        }
                      ]
                    },
                    {
                      title: "",
                      contents: [
                        {
                          type: "text",
                          typeList: "",
                          elements: [],
                          content: "sea contrario al derecho al honor, a la intimidad personal o familiar o a la propia imagen de las personas"
                        }
                      ]
                    },
                    {
                      title: "",
                      contents: [
                        {
                          type: "text",
                          typeList: "",
                          elements: [],
                          content: "de cualquier manera perjudique la credibilidad del prestador o de terceros"
                        }
                      ]
                    },
                    {
                      title: "",
                      contents: [
                        {
                          type: "text",
                          typeList: "",
                          elements: [],
                          content: "constituya publicidad ilícita, engañosa o desleal."
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "secondary",
      title: "EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El prestador se exime de cualquier tipo de responsabilidad derivada de la información publicada en nuestro sitio web, siempre que esta información haya sido manipulada o introducida por un tercero ajeno."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Esta web ha sido revisada y probada para que funcione correctamente. En principio, se puede garantizar el correcto funcionamiento los 365 días del año, 24 horas al día. Sin embargo, el prestador no descarta la posibilidad que existan determinados errores de programación, o que sucedan causas de fuerza mayor, catástrofes naturales, huelgas, o circunstancias parecidas que hagan imposible el acceso a la página web."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "SUMINISTROS FERMON S.L. no otorga ninguna garantía ni se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que puedan salir a colación de la falta de disponibilidad, mantenimiento y efectivo funcionamiento de la web o de sus servicios y contenidos; de la existencia de virus, programas maliciosos o lesivos en los contenidos; del uso ilícito, negligente, fraudulento o contrario a este Aviso Legal y condiciones de uso; o de La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros y ademanes a disposición de los usuarios en el sitio web."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El prestador no se hace responsable bajo ningún concepto de los daños que puedan dimanar del uso ilegal o indebido de la presente página web."
        }
      ]
    },
    {
      type: "secondary",
      title: "COOKIES",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El sitio web del prestador puede utilizar cookies (pequeños archivos de información que el servidor envía al ordenador de quien accede en la página) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del lugar. Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación, y desaparecen al acabar la sesión del usuario."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "En ningún caso se utilizarán las cookies para recoger información de carácter personal."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Para más información, ver nuestra Política de Cookies."
        }
      ]
    },
    {
      type: "secondary",
      title: "ENLACES (LINKS)",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Desde el sitio web es posible que se redirija a contenidos de terceras webs. Dado que desde el web no podemos controlar siempre los contenidos introducidos por los terceros, SUMINISTROS FERMON S.L. no asume ningún tipo de responsabilidad respecto a estos contenidos. En todo caso, el prestador manifiesta que procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la re-dirección a estas webs, poniendo en conocimiento de las autoridades competentes el contenido en cuestión."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El prestador no se responsabiliza de la información y contenidos almacenados, a título enunciativo pero no limitante, en foros, chats, generadores de blogs, comentarios, redes sociales o cualquiera otro medio que permita a terceros publicar contenidos de forma independiente a la página web del prestador. Sin embargo y en cumplimiento de lo que dispone el art. 11 y 16 de la LSSICE, el prestador se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, y colaborando de forma activa en la retirada o, cuando sea necesario, el bloqueo de todos aquellos contenidos que puedan afectar o contravenir la legislación nacional, o internacional, derechos de terceros o la moral y el orden público. En caso de que el usuario considere que puede existir algún contenido que pudiera ser susceptible de esta clasificación, se ruega lo notifique de forma inmediata al administrador del sitio web."
        }
      ]
    },
    {
      type: "secondary",
      title: "PROTECCIÓN DE DATOS PERSONALES",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El prestador está profundamente comprometido con el cumplimiento de la normativa de protección de datos personales y garantiza el cumplimiento íntegro de las obligaciones dispuestas, así como la implementación de las medidas de seguridad dispuestas al Reglamento Europeo de Protección de datos y la normativa española de protección de datos. Para más información, ver nuestra Política de Privacidad. "
        }
      ]
    },
    {
      type: "secondary",
      title: "REDES SOCIALES",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Le informamos que SUMINISTROS FERMON S.L. puede estar presente en redes sociales. El tratamiento de los datos que los usuarios incluyan en las mismas [haciéndose seguidores del prestador en las redes sociales (y/o realizando cualquier vínculo o acción de conexión a través de estas)] se regirá por este apartado, así como por las condiciones de uso, políticas de privacidad y normativas de acceso y uso de las redes sociales en cuestión y aceptadas previamente por el usuario. SUMINISTROS FERMON S.L. tratará sus datos con el fin de informarle de las actividades, productos o servicios del prestador a través de estas redes sociales, así como para cualquier otra finalidad que las normativas de las Redes Sociales permitan, pero no se hará responsable de sus políticas de privacidad."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Queda prohibida la publicación de contenidos:"
        },
        {
          type: "list",
          typeList: "ul",
          elements: [
            {
              title: "",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Que sean presuntamente ilícitos por la normativa nacional, comunitaria o internacional o que realicen actividades presuntamente ilícitas o contravengan los principios de la buena fe."
                },
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Que atenten contra los derechos fundamentales de las personas, falten a la cortesía en la red, molesten o puedan generar opiniones negativas en nuestros usuarios o terceros y en general cualesquiera sean los contenidos que SUMINISTROS FERMON S.L. considere no apropiados."
                },
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Y en general que contravengan los principios de legalidad, honradez, responsabilidad, protección de la dignidad humana, protección de menores, protección del orden público, la protección de la vida privada, la protección del consumidor y los derechos de propiedad intelectual e industrial."
                }
              ]
            }
          ],
          content: ""
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Asimismo, SUMINISTROS FERMON S.L. se reserva la potestad de retirar, sin previo aviso del sitio web o de la red social corporativa aquellos contenidos que se consideren no apropiados."
        }
      ]
    },
    {
      type: "secondary",
      title: "PROPIEDAD INTELECTUAL E INDUSTRIAL",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El sitio web, incluyendo a título enunciativo pero no limitativo la programación, edición, compilación y otros elementos necesarios para su funcionamiento, los diseños, logotipos, textos, fotografías y/o gráficos son propiedad del prestador o, en caso de que fuera necesario, dispone de la licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Independientemente de la finalidad por la que fueran destinados, la reproducción total o parcial, uso, distribución y comunicación pública requieren de la autorización escrita previa por parte del prestador. Cualquier uso no autorizado previamente por parte del prestador será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Los diseños, logotipos, textos y/o gráficos ajenos al prestador y que puedan aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos los responsables de cualquier posible controversia que pudiera acontecer respecto a los mismos. En todo caso, el prestador cuenta con la autorización expresa y previa por parte de los mismos."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El prestador reconoce a favor de sus titulares los correspondientes derechos de propiedad industrial e intelectual, no implicando la mención o aparición en el sitio web, de la existencia de derechos o ninguna responsabilidad del prestador sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del mismo."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del correo electrónico arriba reseñado."
        }
      ]
    },
    {
      type: "secondary",
      title: "LEY APLICABLE Y JURISDICCIÓN",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Para la resolución de las controversias o cuestiones relacionadas con la presente página web o de las actividades en esta desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes por la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Barcelona."
        }
      ]
    }
  ];
  legalPrivacy : any[] = [
    {
      type: "primary",
      title: "POLÍTICA DE PRIVACIDAD",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "En cumplimiento del Capítulo II de la ley 34/2002, LSSICE, los informamos que la presente página web es propiedad de SUMINISTROS FERMON S.L., de ahora en adelante también el Prestador, domiciliada a AVDA. APELES MESTRES, 9, El Prat de Llobregat, Barcelona con CIF B63347017, teléfono de contacto: 933790320, y email: info@ferreteriafermon.com."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "SUMINISTROS FERMON S.L., como responsable del presente Sitio web y en conformidad con lo que dispone la normativa vigente en materia de protección de datos personales, el Reglamento (UE) 2016/679 de 27 de abril de 2016 (RGPD) relativo a la protección de las personas físicas en cuanto al tratamiento de datos personales y a la libre circulación de estos datos, la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (LOPD) y por la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE),tiene implementadas todas las medidas de seguridad, de índole técnica y organizativas, establecidas en el Real decreto 1720/2007 de 21 de Diciembre, (que desarrolla la LOPD) para garantizar y proteger la confidencialidad, integridad y disponibilidad de los datos introducidos."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "A efectos de lo que prevé la LOPD, SUMINISTROS FERMON S.L. le informa que los datos que voluntariamente nos está facilitando serán incorporadas a nuestros sistemas de información con el fin de realizar las gestiones comerciales y administrativas necesarias con los usuarios de la web; Las operaciones previstas para realizar los tratamientos son los siguientes: responder a las consultas y/o proporcionar informaciones requeridas por el Usuario; realizar las prestaciones de servicios y/o productos contratados o subscritos por el Usuario; realizar todas aquellas actividades propias de SUMINISTROS FERMON S.L. por el presente aviso legal reseñadas y remitir el boletín de noticias de la página web."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El firmante garantiza la veracidad de los datos aportados y se compromete a comunicar cualquier cambio que se produzca en los mismos."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El Prestador, mediante asterisco (*) en las casillas correspondientes del formulario de contacto, le informa de esta obligatoriedad al Usuario, indicando qué datos son necesarios. Mediante la indicación e introducción de los datos, el Usuario otorga el consentimiento inequívoco a SUMINISTROS FERMON S.L. para que proceda al tratamiento de los datos facilitados en pro de las finalidades mencionadas."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El no facilitar los datos personales solicitados o el no aceptar la presente política de protección de datos supone la imposibilidad de subscribirse, registrarse o recibir información de los productos y servicios del Prestador."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "En conformidad con lo que disponen las normativas vigentes en protección de datos personales, el Prestador está cumpliendo con todas las disposiciones de las normativas RGPD y LOPD para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos al art. 5 del RGPD y al art. 4 de la LOPD, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuadas, pertinentes y limitados al que es necesario en relación con los fines para los cuales son tratados."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el RGPD y la LOPD para proteger los derechos y libertades de los Usuarios."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "De acuerdo con estas normativas, pues, le informamos que tiene derecho a solicitar el acceso, rectificación, portabilidad y supresión de sus datos y la limitación y oposición a su tratamiento dirigiéndose a AVDA. APELES MESTRES, 9, El Prat de Llobregat, Barcelona enviando un correo electrónico a info@ferreteriafermon.com, indicando como Asunto: “LOPD, Derechos ARCO”, y adjuntando fotocopia de su DNI o cualquier medio análogo en derecho, tal y como indica la ley. Tiene derecho a retirar el consentimiento prestado en cualquier momento. La retirada del consentimiento no afectará a la licitud del tratamiento efectuado antes de la retirada del consentimiento. También tiene derecho a presentar una reclamación ante la autoridad de control si considera que pueden haberse visto vulnerados sus derechos en relación a la protección de sus datos (agpd.es)."
        }
      ]
    },
    {
      type: "secondary",
      title: "CONFIDENCIALIDAD Y CESIÓN DE DATOS A TERCEROS",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Los datos que nos facilite se tratarán de forma confidencial. El Prestador ha adoptado todas las medidas técnicas y organizativas y todos los niveles de protección necesarios para garantizar la seguridad en el tratamiento de los datos y evitar su alteración, pérdida, robo, tratamiento o acceso no autorizado, de acuerdo el estado de la tecnología y naturaleza de los datos almacenados. Así mismo, se garantiza también que el tratamiento y registro en ficheros, programas, sistemas o equipos, locales y centros cumplen con los requisitos y condiciones de integridad y seguridad establecidas en la normativa vigente."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "SUMINISTROS FERMON S.L. no cederá los datos personales a terceros, excepto por obligación legal. Sin embargo, en el caso de ser cedidos a algún tercero se produciría una información previa solicitando el consentimiento expreso para tal cesión. La entidad responsable de la base de datos, así como los que intervengan en cualquier fase del tratamiento y/o las entidades a quienes se los haya comunicado -en todo caso siempre con la correspondiente autorización otorgada por el usuario-, están obligadas a observar el secreto profesional y a la adopción de los niveles de protección y las medidas técnicas y organizativas necesarias a su alcance para garantizar la seguridad de los datos de carácter personal, evitando, dentro de lo posible, accesos no autorizados, modificaciones ilícitas, substracciones y/o la pérdida de los datos, con objeto de procurar el correspondiente nivel de seguridad de los ficheros del Prestador, según la naturaleza y sensibilidad de los datos facilitados por los usuarios del presente Sitio web."
        }
      ]
    },
    {
      type: "secondary",
      title: "ACEPTACIÓN Y CONSENTIMIENTO",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El Usuario declara haber sido informado de las condiciones sobre protección de datos de carácter personal, aceptando y consintiendo el tratamiento automatizado de los mismos por parte de SUMINISTROS FERMON S.L. en la forma y para las finalidades indicadas en la presente Política de Protección de Datos Personales."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "A través de esta Política de Privacidad le informamos que las fotografías que estén colgadas en la web son propiedad de SUMINISTROS FERMON S.L., incluyendo las de los menores, en las que, para la obtención de estas, se ha obtenido el consentimiento previo de los padres, tutores o representantes legales mediante la firma de los formularios realizados al efecto por los centros en los cuales los menores forman parte. Sin embargo, los padres, tutores o representantes de los menores, como titulares del ejercicio de los derechos de estos, y siempre previo requerimiento formal por escrito, pueden indicar la negativa al uso de la imagen del menor; en este caso, la imagen se mostrará pixelada."
        }
      ]
    },
    {
      type: "secondary",
      title: "EXACTITUD Y VERACIDAD DE LOS DATOS",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "El usuario es el único responsable de la veracidad y corrección de los datos que remita a SUMINISTROS FERMON S.L., exonerando al Prestador de cualquier responsabilidad al respeto. Los usuarios garantizan y responden, en cualquier caso, de la exactitud, vigencia y autenticidad de los datos personales facilitados, y se comprometen a mantenerlos debidamente actualizados. El usuario acepta proporcionar información completa y correcta en el formulario de registro o suscripción."
        }
      ]
    },
    {
      type: "secondary",
      title: "CONTENIDO DE LA WEB I ENLACES (LINKS)",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "SUMINISTROS FERMON S.L. se reserva el derecho a actualizar, modificar o eliminar la información contenida en la web, pudiendo, incluso, limitar o no permitir el acceso a la información."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "SUMINISTROS FERMON S.L. no asume ningún tipo de responsabilidad por la información contenida en las Webs de terceros a las que se pueda acceder por los 'links' o enlaces desde cualquier página Web propiedad del Prestador."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "La presencia de 'links' o enlaces sólo tienen finalidad informativa y en ningún caso supone ninguna sugerencia, invitación o reconocimiento sobre los mismos."
        }
      ]
    },
    {
      type: "secondary",
      title: "ENVÍO CV",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "En el supuesto de que el usuario envíe su CV a través de nuestra web, le informamos que los datos aportados serán tratados para hacerlo partícipe de los procesos de selección que pueda haber, llevando a cabo un análisis del perfil del solicitante con el objetivo de seleccionar el mejor candidato para el lugar vacante del responsable. Lo informamos que este es el único procedimiento oficial para aceptar su currículum, de forma que no se aceptarán los currículums remitidos por otro procedimiento diferente. En caso de producirse alguna modificación en los datos, le rogamos nos lo comunique por escrito lo más ante posible, con objeto de mantener sus datos debidamente actualizados."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Los datos se conservarán durante un plazo máximo de un año, transcurrido el cual se procederá a la supresión de los datos garantizándole un total respecto a la confidencialidad tanto en el tratamiento como en su posterior destrucción. En este sentido, transcurrido el mencionado plazo, y si desea continuar participando en los procesos de selección del responsable, le rogamos nos remita nuevamente su currículum."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Los datos se podrán tratar y/o comunicar a las empresas integrantes de nuestro grupo durante el tiempo de conservación de su currículum y para los mismos fines antes informados."
        }
      ]
    },
    {
      type: "secondary",
      title: "SUBSCRIPCIÓN AL BLOG DE SUMINISTROS FERMON S.L.",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "En el supuesto de que el usuario se subscriba al blog, le informamos que los datos aportados serán tratados para gestionar su suscripción al blog informativo con aviso de actualización y que se conservarán mientras haya un interés mutuo para mantener el fin del tratamiento. Cuando ya no sea necesario para tal fin, se suprimirán con medidas de seguridad adecuadas para garantizar la seudonimización de los datos o destrucción total de los mismos. No se comunicarán los datos a terceros, excepto obligación legal."
        }
      ]
    },
    {
      type: "secondary",
      title: "PUBLICACIÓN DE SU TESTIMONIO",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "En el supuesto de que el usuario quiera publicar su opinión en la web, le informamos que los datos aportados serán tratados serán para atender las sugerencias propuestas, experiencias u opiniones respecto de los productos y/o servicios para ser publicadas en la página web y así poder ayudar a otros usuarios. Los datos se conservarán mientras haya un interés mutuo para mantener el fin del tratamiento y cuando ya no sea necesario para tal fin, se suprimirán con medidas de seguridad adecuadas para garantizar la seudonimización de los datos o destrucción total de los mismos. Los testigos se publicarán en nuestra página web. El único dato personal que se publicará del testigo será su nombre."
        }
      ]
    },
    {
      type: "secondary",
      title: "CAMBIOS EN LA PRESENTE POLÍTICA DE PRIVACIDAD",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "SUMINISTROS FERMON S.L. se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales."
        }
      ]
    },
    {
      type: "secondary",
      title: "CORREOS COMERCIALES",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "De acuerdo con la LSSICE, SUMINISTROS FERMON S.L. no realiza prácticas de SPAM, por lo tanto, no envía correos comerciales por e-mail que no hayan sido previamente solicitados o autorizados por el Usuario. En consecuencia, en cada uno de los formularios de la Página Web, el Usuario tiene la posibilidad de dar su consentimiento expreso para recibir nuestro Boletín, con independencia de la información comercial puntualmente solicitada."
        }
      ]
    },
    {
      type: "secondary",
      title: "LEGISLACIÓN",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "A todos los efectos las relaciones entre SUMINISTROS FERMON S.L. con los Usuarios de sus servicios telemáticos, presentes en esta Web, están sometidos a la legislación y jurisdicción española a la que se someten expresamente las partes, siendo competentes por la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Barcelona"
        }
      ]
    }
  ];
  legalCookies : any[] = [
    {
      type: "primary",
      title: "AVISO COOKIES",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "De conformidad con la normativa española que regula el uso de cookies en relación a la prestación de servicios de comunicaciones electrónicas, recogida en el Real Decreto Ley 13/2012 del 30 de marzo, le informamos sobre las cookies utilizadas en el sitio web de SUMINISTROS FERMON S.L. (también el prestador) y el motivo de su uso. Asimismo, le informa de que al navegar en el Sitio Web usted está prestando su consentimiento para poder utilizarlas."
        }
      ]
    },
    {
      type: "secondary",
      title: "¿QUÉ SON LAS COOKIES?",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario. Las cookies se asocian únicamente a un usuario anónimo y su ordenador ó dispositivo y no proporcionan referencias que permitan conocer sus datos personales."
        }
      ]
    },
    {
      type: "secondary",
      title: "COOKIES AFECTADAS PER LA NORMATIVA Y COOKIES EXENTAS",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Según la directiva de la UE, las cookies que requieren el consentimiento informado por parte del usuario son las cookies de analítica y las de publicidad y afiliación, quedando exceptuadas las de carácter técnico y las necesarias para el funcionamiento del sitio web o la prestación de servicios expresamente demandados por el usuario."
        }
      ]
    },
    {
      type: "secondary",
      title: "TIPOS DE COOKIES",
      contents: [
        {
          type: "list",
          typeList: "ol",
          elements: [
            {
              title: "",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Según la entidad que las gestione, hay Cookies propias (aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio Solicitado por el usuario) y de terceros (las que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies)."
                }
              ]
            },
            {
              title: "",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Según el tiempo que permanecen activas, existen las de sesión (diseñadas para recabar y almacenar datos mientras el usuario accede a una página web) y las persistentes (en las que los datos se almacenan en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie -puede ir de unos minutos a varios años-)."
                }
              ]
            },
            {
              title: "",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Según la finalidad para la que traten la información que recopilan, pueden ser:"
                },
                {
                  type: "list",
                  typeList: "ul",
                  elements: [
                    {
                      title: "",
                      contents: [
                        {
                          type: "text",
                          typeList: "",
                          elements: [],
                          content: "Cookies técnicas (necesarias para el uso de la web y la prestación del servicio contratado)"
                        }
                      ]
                    },
                    {
                      title: "",
                      contents: [
                        {
                          type: "text",
                          typeList: "",
                          elements: [],
                          content: "Cookies de personalización (que permiten al usuario acceder al servicio con características predefinidas, como por ejemplo el idioma, tipo de navegador, configuración regional, etc.)"
                        }
                      ]
                    },
                    {
                      title: "",
                      contents: [
                        {
                          type: "text",
                          typeList: "",
                          elements: [],
                          content: "Cookies de análisis (recogen información el uso que se realiza de la web)"
                        }
                      ]
                    },
                    {
                      title: "",
                      contents: [
                        {
                          type: "text",
                          typeList: "",
                          elements: [],
                          content: "Cookies publicitarias (recogen información sobre las preferencias y elecciones personales de los usuarios)"
                        }
                      ]
                    },
                    {
                      title: "",
                      contents: [
                        {
                          type: "text",
                          typeList: "",
                          elements: [],
                          content: "Cookies de afiliados (permiten realizar un seguimiento de las visitas procedentes de otras webs, con las que el sitio web establece un contrato de afiliación)"
                        }
                      ]
                    }

                  ],
                  content: ""
                }
              ]
            }
          ],
          content: ""
        }
      ]
    },
    {
      type: "secondary",
      title: "TIPOS DE COOKIES UTILIZADAS POR ESTE SITIO WEB",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Las cookies utilizadas en nuestro sitio web son de sesión y de terceros, y nos permiten almacenar y acceder a información relativa al idioma, el tipo de navegador utilizado, y otras características generales predefinidas por el usuario, así como seguir y analizar la actividad que lleva a cabo para mejorar y prestar nuestros servicios de una manera más eficiente y personalizada. Las cookies usadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación. En ningún caso estas cookies proporcionan por sí mismas datos de carácter personal y no se usan para la recogida de los mismos."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "La utilización de las cookies ofrece ventajas, como, por ejemplo:"
        },
        {
          type: "list",
          typeList: "ul",
          elements: [
            {
              title: "",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "facilita al usuario la navegación y el acceso a los diferentes servicios que ofrece este sitio web"
                }
              ]
            },
            {
              title: "",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "evita al usuario tener que configurar las características generales predefinidas cada vez que accede al sitio web"
                }
              ]
            },
            {
              title: "",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "favorece la mejora del funcionamiento y de los servicios prestados a través de este sitio web, tras el correspondiente análisis de la información obtenida a través de las cookies instaladas."
                }
              ]
            }
          ],
          content: ""
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Al acceder a nuestra web se le informa que si sigue navegando se le instalarán diversas cookies de terceros consintiendo así la instalación de determinadas cookies que tendrán como única finalidad la de registrar el acceso a nuestro sitio web para la realización de estadísticas anónimas sobre las visitas, recopilando información siempre de forma anónima. No es necesario que acepte la instalación de estas cookies, podrá navegar igualmente por toda nuestra web."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "En diversas secciones de nuestra web se podrán instalar cookies de redes sociales, en concreto las siguientes:"
        },
        {
          type: "list",
          typeList: "ul",
          elements: [
            {
              title: "",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Cookie de Twitter, según lo dispuesto en su política de privacidad y uso de cookies."
                }
              ]
            },
            {
              title: "",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Cookie de Facebook, según lo dispuesto en su política de cookies."
                }
              ]
            },
            {
              title: "",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Cookie de Linkedin, según lo dispuesto en su página sobre el uso de las cookies."
                }
              ]
            },
            {
              title: "",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Cookie de Google+ y Google Maps, según lo dispuesto en su página sobre qué tipo de cookies utilizan."
                }
              ]
            }
          ],
          content: ""
        },
        {
          type: "table",
          typeList: "",
          elements: [],
          headElements: [
            {
              title: "Nombre"
            },
            {
              title: "Tipo"
            },
            {
              title: "Propósito"
            },
            {
              title: "Duración"
            },
            {
              title: "Propiedad"
            },
            {
              title: "Proveedor"
            }
          ],
          rowElements: [
            {
              cells: [
                {
                  contents: [
                    "_ga",
                    "_gat",
                    "_gtag"
                  ]
                },
                {
                  contents: [
                    "Cookies de Análisis"
                  ]
                },
                {
                  contents: [
                    "Recopilan información anónima sobre la navegación de los usuarios a través del sitio web para conocer el origen de las visitas y otros datos estadísticos similares."
                  ]
                },
                {
                  contents: [
                    "Temporal"
                  ]
                },
                {
                  contents: [
                    "De terceros"
                  ]
                },
                {
                  contents: [
                    "Google Analytics"
                  ]
                }
              ]
            },
            {
              cells: [
                {
                  contents: [
                    "aviso_cookies"
                  ]
                },
                {
                  contents: [
                    "Technical cookies"
                  ]
                },
                {
                  contents: [
                    "Visualización y Aceptación de la política de cookies"
                  ]
                },
                {
                  contents: [
                    "Temporal"
                  ]
                },
                {
                  contents: [
                    "De terceros"
                  ]
                },
                {
                  contents: [
                    "Propia de la Web"
                  ]
                }
              ]
            },
            {
              cells: [
                {
                  contents: [
                    "PHPSESSID"
                  ]
                },
                {
                  contents: [
                    "Technical cookies"
                  ]
                },
                {
                  contents: [
                    "Sesión del usuario administrador"
                  ]
                },
                {
                  contents: [
                    "Temporal"
                  ]
                },
                {
                  contents: [
                    "De terceros"
                  ]
                },
                {
                  contents: [
                    "Propia de la Web"
                  ]
                }
              ]
            }
          ],
          content: ""
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Más información sobre Google Analytics cookies: Aquí."
        }
      ]
    },
    {
      type: "secondary",
      title: "REVOCACIÓN",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "En todo momento podrá acceder a la configuración de su navegador aceptando o rechazando todas las cookies, o bien seleccionar aquéllas cuya instalación admite y cuáles no, siguiendo uno de los siguientes procedimientos, que depende del navegador que utilice:"
        },
        {
          type: "list",
          typeList: "ul",
          elements: [
            {
              title: "Google Chrome (en el Menú Herramientas):",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Configuración > Mostrar opciones avanzadas > Privacidad (Configuración de contenido) > Cookies: https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktopandhl=es"
                }
              ]
            },
            {
              title: "Microsoft Internet Explorer (en el Menú Herramientas):",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Opciones de Internet > Privacidad > Avanzada: https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
                }
              ]
            },
            {
              title: "Firefox:",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Opciones > Privacidad > Cookies: https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                }
              ]
            },
            {
              title: "Safari, iPad y iPhone:",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Preferencias > Privacidad: https://support.apple.com/kb/ph21411?locale=es_ES"
                }
              ]
            },
            {
              title: "Opera:",
              contents: [
                {
                  type: "text",
                  typeList: "",
                  elements: [],
                  content: "Estos navegadores están sometidos a actualizaciones o modificaciones, por lo que no podemos garantizar que se ajusten completamente a la versión de su navegador."
                }
              ]
            }
          ],
          content: ""
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "También puede ser que utilice otro navegador no contemplado en estos enlaces como Konqueror, Arora, Flock, etc. Para evitar estos desajustes, puede acceder directamente desde las opciones de su navegador, generalmente en el menú de  'Opciones' en la sección de 'Privacidad'. (Por favor, consulte la ayuda de su navegador para más información)."
        },
      ]
    },
    {
      type: "secondary",
      title: "DESACTIVACIÓN/ACTIVACIÓN Y ELIMINACIÓN DE COOKIES",
      contents: [
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Para restringir o bloquear las cookies, se hace a través de la configuración del navegador."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Si no desea que los sitios web pongan ninguna cookie en su equipo, puede adaptar la configuración del navegador de modo que se le notifique antes de que se coloque ninguna cookie. De igual modo, puede adaptar la configuración de forma que el navegador rechace todas las cookies, o únicamente las cookies de terceros. También puede eliminar cualquiera de las cookies que ya se encuentren en el equipo. Tenga en cuenta que tendrá que adaptar por separado la configuración de cada navegador y equipo que utilice."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Tenga en cuenta que si no desea recibir cookies, ya no podremos garantizar que nuestro sitio web funcione debidamente. Puede que algunas funciones del sitio se pierdan y es posible que ya no pueda ver ciertos sitios web. Además, rechazar las cookies no significa que ya no vaya a ver anuncios publicitarios. Simplemente los anuncios no se ajustarán a sus intereses y se repetirán con más frecuencia."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Cada navegador posee un método distinto para adaptar la configuración. Si fuera necesario, consulte la función de ayuda del navegador para establecer la configuración correcta."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Para desactivar las cookies en el teléfono móvil, consulte el manual del dispositivo para obtener más información. Puede obtener más información sobre las cookies en Internet, http://www.aboutcookies.org/."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Teniendo en cuenta la forma en la que funciona Internet y los sitios web, no siempre contamos con información de las cookies que colocan terceras partes a través de nuestro sitio web. Esto se aplica especialmente a casos en los que nuestra página web contiene lo que se denominan elementos integrados: textos, documentos, imágenes o breves películas que se almacenan en otra parte, pero se muestran en nuestro sitio web o a través del mismo."
        },
        {
          type: "text",
          typeList: "",
          elements: [],
          content: "Por consiguiente, en caso de que se encuentre con este tipo de cookies en este sitio web y no estén enumeradas en la lista anterior, le rogamos que nos lo comunique. O bien póngase en contacto directamente con el tercero para pedirle información sobre las cookies que coloca, la finalidad y la duración de la cookie, y cómo ha garantizado su privacidad."
        }
      ]
    }
  ];

  constructor(private route : ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const legalType = this.route.snapshot.paramMap.get('type')!;
    switch (legalType) {
      case 'warning':
        this.pageContent =  this.legalWarning;
        break;

      case 'policy':
        this.pageContent = this.legalPrivacy;
        break;

      case 'cookies':
        this.pageContent = this.legalCookies;
        break;
      default:
        break;
    }
  }

}
