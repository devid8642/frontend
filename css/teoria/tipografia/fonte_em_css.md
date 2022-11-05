# Trabalhando com Fontes em CSS

## font-family

Para determinar que algum texto seja apresentado em alguma família tipográfica usamos a propriedade *font-family*. Podemos passar como valor as categorias de fontes principais que o navegador irá escolher a principal fonte da categoria em questão e selecioná-la: *sans-serif*, *serif* ou *monoespaced*.

## font-size

Além da família tipográfica também podemos definir o tamanho da fonte com a propriedade *font-size*. Existem muitas unidades possível de se utilizar como valor para essa propriedade: cm, mm, in (polegadas), pt (pontos), pc (paicas), px (pixels) etc. No nosso caso o ideal é sempre utilizar a unidade de medida relativa **em** (altura relativa a letra M da fonte em questão). Nesse caso vale lembrar que 1em = 16px que é justamente o tamanho por padrão que os navegadores utilizam.

## Outras propriedades importantes

Além dessas duas também é muito comum utilizar as propriedades *font-style* com o valor *italic* para colocar o texto em itálico e a propriedade *font-weight* para definir o peso da fonte, alguns valores possíveis são *lighter*, *bold*, *bolder* etc.

## Alinhamento de texto

A propriedade para alinhar textos em CSS é a *text-align* que possui quatro valores possíveis: *left*, *right*, *justify* e *center*.