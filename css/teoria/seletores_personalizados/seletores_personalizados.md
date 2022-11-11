# Seletores Personalizados

## Id e class

Quando estamos desenvolvendo interfaces web se faz necessário aplicar CSSs  a determinado elemento ou aplicar CSSs em vários elementos que queremos que tenham o mesmo estilo. Para podermos identificar um único elemento e aplicar um estilo a ele temos o seletor por id, no CSS nos referimos a ele por #. Já se quisermos atribuir um estilo a vários elementos nós temos o seletor por classes, atribui-se a mesma class a todos os elementos que queremos estilizar e por fim nos referimos a essa classe no CSS com ".".

## Hierarquia de seletores

Já foi discutido que existe uma ordem entre as técnicas possíveis para aplicar estilos ao HTML. Primeiro serão considerados os estilos externos, logo em seguida são considerados os estilos locais e por fim os estilos inline. Isso significa que o último valor de um propriedade de um seletor a ser considerada é aquele definido inline, logo em seguida vem o valor definido localmente e por fim o valor na folha de estilos externa.

Existe também uma hierarquia aplicada aos seletores. Primeiro temos os seletores de elementos, logo em seguida serão consideras os valores das propriedades nos seletores do tipo class e por fim os seletores de id.