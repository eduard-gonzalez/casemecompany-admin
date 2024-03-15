import CheckBoxField from "../InputFields/CheckBoxField";

const OptionsTab = () => {
  return (
    <>
      <CheckBoxField name="is_featured" title="Descatado" helpertext="*Al habilitar esta opción se mostrará una etiqueta destacada en el producto." />
      <CheckBoxField name="safe_checkout" title="Pago Seguro" helpertext="*Aparecerá una imagen de pago seguro en la página del producto." />
      <CheckBoxField name="secure_checkout" title="Pago seguro" helpertext="*Aparecerá una imagen de pago seguro en la página del producto." />
      <CheckBoxField name="social_share" title="Compartir en redes" helpertext="*Habilite esta opción para permitir a los usuarios compartir el producto en redes sociales.." />
      <CheckBoxField name="encourage_order" title="Random Ordenes" helpertext="*Se mostrará un recuento de pedidos aleatorio entre 1 y 100 para motivar las compras de los usuarios." />
      <CheckBoxField name="encourage_view" title="Vistas" helpertext="*Se mostrará un recuento de visitas aleatorio entre 1 y 100 para motivar las compras de los usuarios." />
      <CheckBoxField name="is_trending" title="En tendencia" helpertext="*Habilite esta opción para mostrar el producto en la sección de tendencias." />
      <CheckBoxField name="is_return" title="Retorno" helpertext="*Habilite esta opción para permitir la devolución del producto." />
      <CheckBoxField name="status" helpertext="*Habilite esta opción para mostrar el producto en la tienda." />
    </>
  );
};

export default OptionsTab;
