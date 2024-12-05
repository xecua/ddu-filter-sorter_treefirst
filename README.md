# ddu-filter-sorter_treefirst

Sort items so that directories come first at each level.
Mainly intended to be used with [ddu-ui-filer](https://github.com/Shougo/ddu-ui-filer).

## Required plugins

+ [denops.vim](https://github.com/vim-denops/denops.vim)
+ [ddu.vim](https://github.com/Shougo/ddu.vim)

## Example configuration

```vim
call ddu#custom#patch_global(#{
\   sourceOptions: #{
\     file: #{
\       sorters: ['sorter_filetype']
\     }
\   }
\ })
```
