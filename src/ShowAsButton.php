<?php

namespace Ape\ActionButtons;

trait ShowAsButton
{
    function showAsButton(): static
    {
        $this->withMeta(['showAsButton' => true]);

        return $this;
    }
}
