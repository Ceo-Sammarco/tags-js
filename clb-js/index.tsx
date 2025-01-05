

import './assets/ui.css';


/**
 * == [ View ]
 * 
 * == == == == == == == == == */
export type View_props = {
   children?: React.ReactNode;
   bg?: string;
   color?: string;
   w?: string;
   h?: string;
   m?: string;
   pd?: string;
   gap?: string;
   flex?: boolean;
   block?: boolean;
   grid?: boolean;

   column?: boolean;
   row?: boolean;

   gridColumn?: boolean;
   gridRow?: boolean;

   size?: string;
   weight?: string;
   lineH?: string;
};

export function View( { ...props }: View_props ) {
   return( <>
      <section
         style={{
            ...{ display: props.flex ? 'flex' : props.grid ? 'grid' : props.block ? 'block' : undefined },
            ...{ backgroundColor: props.bg || undefined },
            ...{ color: props.color || undefined },
            ...{ width: props.w || undefined },
            ...{ height: props.h || undefined },
            ...{ margin: props.m || undefined },
            ...{ padding: props.pd || undefined },
            ...{ gap: props.gap || undefined },
            ...{ flexDirection: props.column ? 'column' : props.row ? 'row' : undefined },
            ...{ gridAutoFlow: props.gridColumn ? 'column' : props.gridRow ? 'row' : undefined },
            
            ...{ fontSize: props.size || undefined },
            ...{ fontWeight: props.weight || undefined },
            ...{ lineHeight: props.lineH || undefined },
         }}
      >
         { props.children }
      </section>
   </> );
}
/* -- -- -- -- -- -- -- -- -- */


/**
 * == [ Text ]
 * 
 * == == == == == == == == == */
export type Text_props = View_props & {
   title?: boolean;
   subTitle?: boolean;
   description?: boolean;
};

export function Text( { ...props }: Text_props ) {
   return( <>
      <p
         style={{
            ...{ display: props.flex ? 'flex' : props.grid ? 'grid' : props.block ? 'block' : undefined },
            ...{ backgroundColor: props.bg || undefined },
            ...{ color: props.color || undefined },
            ...{ width: props.w || undefined },
            ...{ height: props.h || undefined },
            ...{ margin: props.m || undefined },
            ...{ padding: props.pd || undefined },
            ...{ gap: props.gap || undefined },
            ...{ flexDirection: props.column ? 'column' : props.row ? 'row' : undefined },
            ...{ gridAutoFlow: props.gridColumn ? 'column' : props.gridRow ? 'row' : undefined },
            
            // ...{ fontSize: props.size || undefined },
            // ...{ fontWeight: props.weight || undefined },
            ...{ lineHeight: props.lineH || undefined },
            ...{ fontSize: props.title ? '2em' : props.subTitle ? '1.5em' : props.description ? '1em' : '.8em' },
            ...{ fontWeight: props.title ? '700' : props.subTitle ? '700' : props.description ? '600' : '500' },
         }}
      >
         { props.children }
      </p>
   </> );
}
/* -- -- -- -- -- -- -- -- -- */


/**
 * == [ AppBar ]
 * 
 * == == == == == == == == == */
export type AppBar_props = View_props & {
   title?: string | React.ReactNode;
   className?: string;
};

export function AppBar( { ...props }: AppBar_props ) {
   return( <>
      <main className={ props.className || "" }>   
         { props.children }
      </main>
   </> );
}
/* -- -- -- -- -- -- -- -- -- */


/**
 * == [  ]
 * 
 * == == == == == == == == == */
/* -- -- -- -- -- -- -- -- -- */