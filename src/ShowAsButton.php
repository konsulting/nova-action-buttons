<?php

namespace Konsulting\NovaActionButtons;

trait ShowAsButton
{
    function showAsButton(): static
    {
        $this->withMeta(['showAsButton' => true]);

        return $this;
    }

    function hideIfCantRun(): static
    {
        $this->withMeta(['hideIfCantRun' => true]);

        return $this;
    }
}
