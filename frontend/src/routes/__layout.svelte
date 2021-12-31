<script context="module">
  import { register, init, waitLocale, getLocaleFromQueryString } from 'svelte-intl-precompile';
  import { registerAll } from '$locales';

  // Equivalent to a `register("lang", () => import('$locales/lang'))` fro each lang file in localesRoot.
  registerAll();

  export async function load({session}) {
    init({
      fallbackLocale: 'en',
      //initialLocale: session.acceptedLanguage || getLocaleFromNavigator(),
			initialLocale: getLocaleFromQueryString('lang'),
    });
    await waitLocale(); // awaits for initialLocale language pack to finish loading;
    return {};
  }
</script>

<script>
	import '../app.css';
	import { t } from 'svelte-intl-precompile';
  import { locale, locales } from 'svelte-intl-precompile'
</script>

<div>{$t('a')}</div>

<select bind:value={$locale}>
  {#each $locales as locale}
    <option value={locale}>{locale}</option>
  {/each}
</select>

<slot />
